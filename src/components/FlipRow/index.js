import React from 'react';
import colors from '../../styles/colors';

function convertStringToFlip(message) {
  const output = [];
  for (let i = 0; i < message.length; i += 1) {
    output.push(<FlipBox key={`${i}${message[i]}`} value={message[i]} />);
  }
  return output;
}

export function FlipRow(props) {
  const { message } = props;
  return (
    <div
      style={{ display: 'flex', width: '100%', marginTop: 5, marginBottom: 5 }}
    >
      {convertStringToFlip(message)}
    </div>
  );
}

function FlipBox(props) {
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

export default FlipBox;
