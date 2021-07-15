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
        // paddingTop: '1vh',
        //   paddingBottom: '1v
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
