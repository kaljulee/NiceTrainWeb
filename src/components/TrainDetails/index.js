import React from 'react';

function Activity(props) {
  return <span>an activty</span>;
}

function TrainDetails(props) {
  const { onCloseClick } = props;
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <Activity />
      <button type="button" onClick={onCloseClick}>
        close details
      </button>
    </div>
  );
}

export default TrainDetails;
