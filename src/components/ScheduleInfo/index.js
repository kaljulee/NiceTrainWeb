import React from 'react';
import colors from '../../styles/colors';

function Square() {
  return (
    <div style={{ height: 70, width: 30, backgroundColor: colors.flipBack }} />
  );
}

function ScheduleInfo(props) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: colors.boardBack,
        height: '100%',
        width: '100%',
        flexDirection: 'column'
      }}
    >
      <div style={{ flex: 1 }}>
        <Square />
      </div>
      <div style={{ flex: 1 }}>
        <Square />
      </div>
      <div style={{ flex: 1 }}>
        <Square />
      </div>
    </div>
  );
}

export default ScheduleInfo;
