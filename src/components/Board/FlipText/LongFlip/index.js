import React from 'react';
import styled from '@emotion/styled';
import { mq5 } from '../../../../styles/breakpoints';
import { FlipBackdrop, FlipBoxContainer, FlipText } from '../../FlipText2';

const LongFlipBoxContainer = styled(FlipBoxContainer)`
  width: 90%;
`;

const LongFlipBackdrop = styled(FlipBackdrop)`
  width: 100%;
  margin-left: 0;
`;

const LongFlipText = styled(FlipText)`
  color: ${(p) => p.$color};
  font-weight: bold;
  ${mq5({ fontSize: [8, 12, 12, 16, 16] })}
`;

function LongFlip(props) {
  const { message, textColor } = props;
  return (
    <LongFlipBoxContainer>
      <LongFlipBackdrop>
        <LongFlipText $color={textColor}>
          {message ? message.toUpperCase() : ''}
        </LongFlipText>
      </LongFlipBackdrop>
    </LongFlipBoxContainer>
  );
}

LongFlip.defaultProps = { textColor: '#dddddd', message: '' };

export default LongFlip;
