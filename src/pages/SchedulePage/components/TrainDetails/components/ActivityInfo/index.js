import React from 'react';
import { connect } from 'react-redux';
import DetailsSection from '../DetailsSection';

function ActivityInfo(props) {
  const { activity } = props;
  return <DetailsSection title="Activity">activity data here</DetailsSection>;
}

const mapStateToProps = (state, props) => {
  const {
    train: { formats, activities }
  } = state;
  // const {
  //   activity: { id, formatID, activityID }
  // } = props;
  if (!props.activity) {
    return {};
  }
  console.log('mstp activity');
  console.log(props.activity);
  return {};
};

export default connect(mapStateToProps)(ActivityInfo);
