import React from 'react';
import colors from '../../styles/colors';

function Square(props) {
  const { value } = props;
  return (
    <div style={{ height: 50, width: 30 }}>
      <div
        style={{
          backgroundColor: colors.flipBack,
          border: `2px solid ${'black'}`,
          textAlign: 'center',
          top: 2
        }}
      >
        <span
          style={{
            textJustify: 'center',
            textAlign: 'center',
            fontSize: 32,
            color: colors.boardLettering,
            position: 'relative',
            top: -2
          }}
        >
          {value}
        </span>
      </div>
      <div
        style={{
          position: 'relative',
          backgroundColor: colors.boardBack,
          height: 2,
          width: 30,
          top: -24
        }}
      />
    </div>
  );
}

function ScheduleInfo(props) {
  return (
    <div
      style={{
        backgroundColor: colors.boardComponent,
        width: '100%',
        border: '1px solid purple'
      }}
    >
      <div style={{ border: '1px solid yellow' }}>
        <Square value="X" />
      </div>
      <div>
        <Square value="p" />
      </div>
      <div style={{ border: '1px solid orange' }}>
        <Square value="x" />
      </div>
    </div>
  );
}

export default ScheduleInfo;
