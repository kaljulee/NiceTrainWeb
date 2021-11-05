import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import DetailsSection from '../DetailsSection';
import {
  InfoColumn,
  InfoRow,
  NoInfoPlaceholder,
  PamphletSubLabel,
} from '../../../trainPamphlet';
import { secondsToDisplay } from '../../../../../utils';
import { NTColumn } from '../../../../layoutComponents';

function ActivityInfo(props) {
  const { activity, format, baseActivity, duration, name } = props;
  const [durationString, setDurationString] = useState(
    secondsToDisplay(duration)
  );

  useEffect(() => {
    setDurationString(secondsToDisplay(duration));
  }, [duration]);

  return (
    <DetailsSection title='Activity'>
      {activity ? (
        <NTColumn style={{}}>
          <InfoRow>
            <InfoColumn>
              <PamphletSubLabel>Format</PamphletSubLabel>
              <span>{format}</span>
            </InfoColumn>
            <InfoColumn>
              <PamphletSubLabel>Duration</PamphletSubLabel>
              <span style={{ textAlign: 'center' }}>{durationString}</span>
            </InfoColumn>
          </InfoRow>
        </NTColumn>
      ) : (
        <NoInfoPlaceholder>Pick an Activity from the map</NoInfoPlaceholder>
      )}
    </DetailsSection>
  );
}

const mapStateToProps = (state, props) => {
  const returnValue = {};
  const {
    train: { formats, activities },
  } = state;
  const { activity } = props;
  if (!activity) {
    return returnValue;
  }

  const { formatID, activityID, name, duration } = activity;

  returnValue.name = name;
  returnValue.duration = duration;

  if (formatID) {
    const foundFormat = formats.find((f) => f.id === formatID);
    if (foundFormat) {
      returnValue.format = foundFormat.name;
    }
  }
  if (activityID) {
    const foundBase = activities.find((a) => a.id === activityID);
    if (foundBase) {
      returnValue.baseActivity = foundBase.name;
    }
  }

  return returnValue;
};

export default connect(mapStateToProps)(ActivityInfo);
