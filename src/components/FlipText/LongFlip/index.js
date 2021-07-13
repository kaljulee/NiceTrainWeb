import React from 'react';
import { useCurrentWidth } from 'react-socks';
import colors from '../../../styles/colors';
import flipConstants from '../flipConstants';
import breakpoints from '../../../styles/breakpoints';

function LongFlip(props) {
  const { message } = props;
  const width = useCurrentWidth();
  return (
    <div
      style={{
        height: flipConstants.height,
        width: '90%',
        backgroundColor: colors.flipBack,
        fontSize: width >= breakpoints.xlarge ? 15 : 12,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        paddingLeft: 15,
        paddingRight: 15
      }}
    >
      <span
        style={{
          letterSpacing: 2,
          fontFamily: 'helvetica',
          display: 'inline-block',
          color: '#dddddd',
          WebkitTextStrokeWidth: 'thin',
          WebkitTextStrokeColor: 'white'
        }}
      >
        {message.toUpperCase()}
      </span>
    </div>
  );
}

export default LongFlip;
