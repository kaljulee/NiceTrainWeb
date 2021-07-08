import React from 'react';
import ScheduleBoard from '../../components/ScheduleBoard';
import data from '../../data';
import ScheduleHeader from '../../components/ScheduleHeader';

function SchedulePage() {
  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        minHeight: '100vh',
        flexDirection: 'column',
        width: '100%',
        border: '5px solid red',
        alignItems: 'center'
      }}
    >
      <ScheduleHeader />
      <div
        style={{
          display: 'flex',
          flex: '5',
          border: '5px solid green',
          width: '80%'
        }}
      >
        <ScheduleBoard data={data} />
      </div>
    </div>
  );
}

export default SchedulePage;
