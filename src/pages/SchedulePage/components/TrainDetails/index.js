import React, { useEffect } from 'react';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { connect, useDispatch } from 'react-redux';
import { trainPamphletTheme } from '../../../../styles/colors';
import { NTBox, ToggleMenu } from '../../../../components/layoutComponents';
import { NTButton } from '../../../../components/styledComponents';
import { callGetScheduledActivitiesByTrain } from '../../../../redux/thunks/scheduledActivity';

const TrainDetailsToggle = styled(ToggleMenu)`
  background: ${(p) => p.theme.background};
`;

function TrainDetails(props) {
  const { trainID, clearTrainID, train, activities, station } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    if (!activities && !!trainID) {
      console.log('fetching activities');
      dispatch(callGetScheduledActivitiesByTrain(trainID));
    }
  }, [trainID]);
  return (
    <ThemeProvider theme={trainPamphletTheme}>
      <TrainDetailsToggle isOpen={!!trainID}>
        <NTBox style={{ height: '75vh' }}>
          <NTButton onClick={clearTrainID}>close</NTButton>
        </NTBox>
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
