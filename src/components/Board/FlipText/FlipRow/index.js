import React from 'react';
import { FlipBackdrop, FlipBoxContainer, FlipLine, FlipText } from '../index';

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
  return (
    <div
      style={{
        display: 'flex',
        width: 'fit-content',
        textAlign: 'center'
      }}
    >
      {convertStringToFlip(message, rowLength)}
    </div>
  );
}

// single letter in flip box
function FlipBox(props) {
  const { value } = props;
  return (
    <FlipBoxContainer>
      <FlipBackdrop>
        <FlipText>{value}</FlipText>
        <FlipLine value={value} />
      </FlipBackdrop>
    </FlipBoxContainer>
  );
}

FlipBox.defaultProps = { value: ' ' };

export default FlipBox;
