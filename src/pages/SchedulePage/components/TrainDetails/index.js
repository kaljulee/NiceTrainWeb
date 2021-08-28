import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { connect, useDispatch } from 'react-redux';
import { DateTime } from 'luxon';
import { trainPamphletTheme } from '../../../../styles/colors';
import {
  NTColumn,
  NTRow,
  ToggleMenu
} from '../../../../components/layoutComponents';
import { NTButton } from '../../../../components/styledComponents';
import { callGetScheduledActivitiesByTrain } from '../../../../redux/thunks/scheduledActivity';
import { mq5 } from '../../../../styles/breakpoints';
import DetailsMap from './DetailsMap';
import DetailsDisplay from './DetailsDisplay';

const TrainDetailsToggle = styled(ToggleMenu)`
  background: ${(p) => p.theme.background};
`;

const DetailsHeader = styled(NTRow)`
  background: ${(p) => p.theme.primarySurface};
  flex: ${(p) => p.$flex};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1vw;
  span {
    font-size: 40px;
    font-weight: bold;
    color: ${(p) => p.theme.onPrimarySurface};
    ${mq5({ fontSize: [24, 24, 30, 30, 35] })}
  }
`;

const MapSection = styled(NTColumn)`
  flex: ${(p) => p.$flex};
`;

const DisplaySection = styled(NTRow)`
  flex: ${(p) => p.$flex};
  border: 1px solid ${(p) => p.theme.primarySurface};
`;

const DateTimeInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

function getTrainDate(train) {
  if (!train.train_date) {
    return '';
  }
  const date = DateTime.fromFormat(train.train_date, 'yyyy-MM-dd');
  return date.toLocaleString({
    ...DateTime.DATE_SHORT,
    weekday: 'long'
  });
}

function TrainDetails(props) {
  const { trainID, clearTrainID, train, activities, station } = props;
  const dispatch = useDispatch();
  const [trainDate, setTrainDate] = useState();
  const [activeActivity, setActiveActivity] = useState();
  useEffect(() => {
    if (train) {
      setTrainDate(getTrainDate(train));
    }
    if (!activities && !!trainID) {
      dispatch(callGetScheduledActivitiesByTrain(trainID));
    }
  }, [trainID]);

  function onActivityClick(id) {
    if (activities) {
      setActiveActivity(activities.find((a) => a.id === id));
    }
  }

  return (
    <ThemeProvider theme={trainPamphletTheme}>
      <TrainDetailsToggle isOpen={!!trainID}>
        <NTColumn style={{ height: '80vh' }}>
          <DetailsHeader $flex={1}>
            <DateTimeInfo>
              <span>{trainDate}</span>
              <span>{train && train.train_time}</span>
            </DateTimeInfo>
            <NTButton onClick={clearTrainID}>close</NTButton>
          </DetailsHeader>
          <MapSection $flex={3}>
            <DetailsMap
              activeActivityID={activeActivity ? activeActivity.id : false}
              activities={activities}
              onActivityClick={onActivityClick}
            />
          </MapSection>
          <DisplaySection $flex={4}>
            <DetailsDisplay activity={activeActivity} />
          </DisplaySection>
        </NTColumn>
      </TrainDetailsToggle>
    </ThemeProvider>
  );
}

const mapStateToProps = (state, props) => {
  const { trainID } = props;
  if (!trainID) {
    return {};
  }
  const train = state.train.scheduledTrains.find((t) => t.id === trainID);
  const activities = state.train.scheduledActivities[trainID];
  const station = state.train.stations.find((s) => s.id === train.stationID);
  return { train, activities, station };
};

export default connect(mapStateToProps)(TrainDetails);
