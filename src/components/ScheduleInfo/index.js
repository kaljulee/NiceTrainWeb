import React from 'react';
import colors from '../../styles/colors';
import { FlipRow } from '../FlipRow';

function ScheduleInfo(props) {
  const { message } = props;
  return (
    <div
      style={{
        backgroundColor: colors.boardComponent,
        width: '100%',
        border: '1px solid purple'
      }}
    >
      <FlipRow message={message} />
      <FlipRow message={message} />
      <FlipRow message={message} />
    </div>
  );
}

ScheduleInfo.defaultProps = { message: 'DEFAULT MESSAGE Default Message' };

export default ScheduleInfo;
