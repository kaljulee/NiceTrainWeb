import React from 'react';
import colors from '../../../styles/colors';
import flipConstants from '../flipConstants';

function convertStringToFlip(message) {
  const output = [];
  for (let i = 0; i < message.length; i += 1) {
    output.push(<FlipBox key={`${i}${message[i]}`} value={message[i]} />);
  }
  return output;
}

// row of flip box letters
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

// single letter in flip box
function FlipBox(props) {
  const { value } = props;
  const flipBoxWidth = flipConstants.width;
  return (
    <div style={{ height: flipConstants.height, width: flipBoxWidth }}>
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
            fontSize: 28,
            color: colors.boardLettering,
            position: 'relative',
            paddingTop: 3,
            display: 'inline-block'
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
          width: flipBoxWidth,
          top: -26
        }}
      />
    </div>
  );
}

export default FlipBox;
