import React from 'react';
import { useCurrentWidth } from 'react-socks';
import styled from '@emotion/styled';
import flipConstants from '../flipConstants';
import { mq5 } from '../../../styles/breakpoints';

const LongFlipWrapper = styled.div`
  width: 90%;
  background: ${(p) => p.theme.secondarySurface};
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding-left: 15px;
  padding-right: 15px;
  ${mq5({ fontSize: [12, 12, 12, 16, 16] })}
  span {
    letter-spacing: 2px;
    font-family: helvetica;
    display: inline-block;
    color: ${(p) => p.$color};
    padding-top: 2px;
    font-weight: bold;
  }
`;

LongFlipWrapper.defaultProps = { $color: 'white' };

function LongFlip(props) {
  const { message, textColor } = props;
  const width = useCurrentWidth();
  return (
    <LongFlipWrapper
      style={{
        height: flipConstants.height
      }}
      $color={textColor}
    >
      <span>{message ? message.toUpperCase() : ''}</span>
    </LongFlipWrapper>
  );
}

LongFlip.defaultProps = { textColor: '#dddddd', message: '' };

export default LongFlip;
