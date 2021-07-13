import React from 'react';
import { useCurrentWidth } from 'react-socks';
import colors from '../../../styles/colors';
import flipConstants from '../flipConstants';

function LongFlip(props) {
  const { message } = props;
  const width = useCurrentWidth();
  return (
    <div
      style={{
        height: flipConstants.height,
        width: '90%',
        backgroundColor: colors.flipBack,
        fontSize: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <span
        style={{
          letterSpacing: 2,
          fontFamily: 'helvetica',
          display: 'inline-block',
          color: '#dddddd',
          webkitTextStrokeWidth: 'thin',
          webkitTextStrokeColor: 'white'
        }}
      >
        {message.toUpperCase()}
      </span>
    </div>
  );
}

export default LongFlip;
