import React from 'react';
import { useCurrentWidth } from 'react-socks';
import colors from '../../styles/colors';
import { FlipRow } from '../FlipText/FlipRow';
import flipConstants from '../FlipText/flipConstants';

function ScheduleInfo(props) {
  const { message } = props;
  const width = useCurrentWidth();
  const characterCount = Math.floor(width / flipConstants.width) - 2;
  // const emptyMessageArray = [];
  //
  // const emptyMessage =
  console.log(characterCount);
  return (
    <div
      style={{
        backgroundColor: colors.boardComponent,
        width: '100%',
        padding: 20
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
