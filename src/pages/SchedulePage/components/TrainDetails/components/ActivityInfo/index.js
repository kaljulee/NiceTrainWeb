import React from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import DetailsSection from '../DetailsSection';

const NoActivityMessage = styled.div`
  font-size: 18px;
  color: ${(p) => p.theme.primarySurface};
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

function ActivityInfo(props) {
  const { activity, format, baseActivity, duration, name } = props;
  return (
    <DetailsSection title="Activity">
      {activity ? (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span>{name}</span>
          <span>{format}</span>
          <span>{duration}</span>
        </div>
      ) : (
        <NoActivityMessage>Pick an Activity from the map</NoActivityMessage>
      )}
    </DetailsSection>
  );
}

const mapStateToProps = (state, props) => {
  const returnValue = {};
  const {
    train: { formats, activities }
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
