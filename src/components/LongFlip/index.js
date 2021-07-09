import React from 'react';
import colors from '../../styles/colors';

function LongFlip(props) {
  const { message } = props;
  return (
    <div
      style={{
        height: 40,
        width: '90%',
        backgroundColor: colors.flipBack,
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
