import React from 'react';
import styled from '@emotion/styled';
import { mq5 } from '../../../../styles/breakpoints';
import { FlipBackdrop, FlipBoxContainer, FlipText } from '../../FlipText2';

const LongFlipBoxContainer = styled(FlipBoxContainer)`
  width: 90%;
`;

const LongFlipBackdrop = styled(FlipBackdrop)`
  width: 100%;
`;

const LongFlipText = styled(FlipText)`
  color: ${(p) => p.$color};
  font-weight: bold;
`;

function LongFlip(props) {
  const { message, textColor } = props;
  return (
    <LongFlipBoxContainer>
      <LongFlipBackdrop>
        <LongFlipText $color={textColor} style={{ fontSize: 10 }}>
          {message ? message.toUpperCase() : ''}
        </LongFlipText>
      </LongFlipBackdrop>
    </LongFlipBoxContainer>
  );
}

LongFlip.defaultProps = { textColor: '#dddddd', message: '' };

export default LongFlip;
