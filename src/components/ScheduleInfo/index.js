import React from 'react';
import colors from '../../styles/colors';

function Square(props) {
  const { value } = props;
  return (
    <div style={{ height: 47, width: 30 }}>
      <div
        style={{
          backgroundColor: colors.flipBack,
          border: `2px solid ${'black'}`,
          textAlign: 'center',
          top: 2,
          height: '100%'
        }}
      >
        <span
          style={{
            textJustify: 'center',
            textAlign: 'center',
            fontSize: 32,
            color: colors.boardLettering,
            position: 'relative'
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
          top: -25
        }}
      />
    </div>
  );
}

function convertStringToFlip(message) {
  const output = [];
  for (let i = 0; i < message.length; i += 1) {
    output.push(<Square value={message[i]} />);
  }
  return output;
}

function FlipRow(props) {
  return <div style={{ display: 'flex', width: '100%' }}>{props.children}</div>;
}

function ScheduleInfo(props) {
  const { message } = props;
  return (
    <div
      style={{
        backgroundColor: colors.boardComponent,
        width: '100%',
        border: '1px solid purple'
      }}
    >
      <FlipRow style={{ border: '1px solid yellow' }}>
        <Square value="X" />
      </FlipRow>
      <FlipRow>{convertStringToFlip(message)}</FlipRow>
      <FlipRow style={{ border: '1px solid orange' }}>
        <Square value="x" />
      </FlipRow>
    </div>
  );
}

ScheduleInfo.defaultProps = { message: 'DEFAULT MESSAGE Default Message' };

export default ScheduleInfo;
