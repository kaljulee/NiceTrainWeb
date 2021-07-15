import React from 'react';
import colors from '../../../styles/colors';
import flipConstants from '../flipConstants';

function convertStringToFlip(message, rowLength) {
  const unlimitedLength = !rowLength;
  const output = [];
  if (!message || !message.length) {
    for (let i = 0; i < rowLength; i += 1) {
      output.push(<FlipBox key={`${i}${'emptystring'}`} />);
    }
  } else {
    const totalPadding = rowLength - message.length;
    const leftPadding = Math.floor(totalPadding / 2);
    const rightPadding = totalPadding - leftPadding;
    // only add padding if more than zero is required
    if (leftPadding > 0) {
      for (let i = 0; i < leftPadding; i += 1) {
        output.push(<FlipBox key={`${i}leftpad`} />);
      }
    }
    for (
      let i = 0;
      i < message.length && (unlimitedLength || i < rowLength);
      i += 1
    ) {
      output.push(<FlipBox key={`${i}${message[i]}`} value={message[i]} />);
    }
    // only add padding if more than zero is required
    if (rightPadding > 0) {
      for (let i = 0; i < rightPadding; i += 1) {
        output.push(<FlipBox key={`${i}rightpad`} />);
      }
    }
  }
  return output;
}

// row of flip box letters
export function FlipRow(props) {
  const { message, rowLength } = props;
  // if (!message || !message.length) {
  //     return
  // }
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center'
      }}
    >
      {convertStringToFlip(message, rowLength)}
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
          width: '100%',
          border: `2px solid ${'black'}`,
          textAlign: 'center',
          top: 2,
          height: '100%',
          boxSizing: 'border-box'
        }}
      >
        <span
          style={{
            textJustify: 'center',
            textAlign: 'center',
            fontSize: 20,
            color: colors.boardLettering,
            position: 'relative',
            display: 'inline-block'
          }}
        >
          {value}
        </span>
      </div>
      <div
        style={{
          position: 'relative',
          backgroundColor: colors.boardComponent,
          height: 1,
          width: flipBoxWidth,
          top: Math.ceil(flipConstants.height / -2) + 1
        }}
      />
    </div>
  );
}

export default FlipBox;
