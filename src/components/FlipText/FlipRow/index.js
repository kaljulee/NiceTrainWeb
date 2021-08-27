import React from 'react';
import styled from '@emotion/styled';
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
  return (
    <div
      style={{
        display: 'flex'
      }}
    >
      {convertStringToFlip(message, rowLength)}
    </div>
  );
}

const FlipBoxContainer = styled.div`
  height: ${(p) => p.$height}px;
  width: ${(p) => p.$width}px;
`;

const FlipLine = styled.div`
  position: relative;
  background: ${(p) => p.theme.background};
  height: 1px;
  width: ${(p) => p.$width}px;
  top: ${(p) => p.$top}px;
`;

const FlipBackdrop = styled.div`
  background: ${(p) => p.theme.secondarySurface};
  width: 100%;
  border: 2px solid ${(p) => p.theme.background};
  text-align: center;
  top: 2px;
  height: 100%;
  box-sizing: border-box;
`;

const FlipText = styled.span`
  text-justify: center;
  text-align: center;
  font-size: 20px;
  color: ${(p) => p.theme.onSecondarySurface};
  position: relative;
  display: inline-block;
`;

// single letter in flip box
function FlipBox(props) {
  const { value } = props;
  const flipBoxWidth = flipConstants.width;
  return (
    <FlipBoxContainer $height={flipConstants.height} $width={flipBoxWidth}>
      <FlipBackdrop>
        <FlipText>{value}</FlipText>
      </FlipBackdrop>
      <FlipLine
        $width={flipBoxWidth}
        $top={Math.ceil(flipConstants.height / -2) + 1}
      />
    </FlipBoxContainer>
  );
}

export default FlipBox;
