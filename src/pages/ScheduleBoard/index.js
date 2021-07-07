import React from 'react';

function ScheduleBoard() {
  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        minHeight: '100vh',
        flexDirection: 'column',
        width: '100%',
        border: '5px solid red'
      }}
    >
      <div style={{ display: 'flex', flex: 1, border: '5px solid blue' }}>
        header
      </div>
      <div style={{ display: 'flex', flex: 4, border: '5px solid green' }}>
        body
      </div>
    </div>
  );
}

export default ScheduleBoard;
