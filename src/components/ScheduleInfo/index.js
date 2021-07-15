import React, { useEffect, useState } from 'react';
import { useCurrentWidth } from 'react-socks';
import colors from '../../styles/colors';
import { FlipRow } from '../FlipText/FlipRow';
import flipConstants from '../FlipText/flipConstants';

function calculateCharacterCount(width) {
  return Math.floor(width / flipConstants.width) - 2;
}

function ScheduleInfo(props) {
  const { message } = props;
  const width = useCurrentWidth();
  const [characterCount, setCharacterCount] = useState(
    calculateCharacterCount(width)
  );
  useEffect(() => setCharacterCount(calculateCharacterCount(width)), [width]);
  console.log(characterCount);
  return (
    <div
      style={{
        backgroundColor: colors.boardComponent,
        width: '100%',
        padding: '1vh 1vw 1vh 1vw'
      }}
    >
      <FlipRow message={message} rowLength={characterCount} />
      <FlipRow message={message} rowLength={characterCount} />
      <FlipRow rowLength={characterCount} />
    </div>
  );
}

ScheduleInfo.defaultProps = { message: 'DEFAULT MESSAGE Default Message' };

export default ScheduleInfo;
