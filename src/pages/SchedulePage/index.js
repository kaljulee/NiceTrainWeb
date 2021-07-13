import React from 'react';
import { Breakpoint } from 'react-socks';
import ScheduleBoard from '../../components/ScheduleBoard';
import data from '../../data';
import ScheduleHeader from '../../components/ScheduleHeader';
import colors from '../../styles/colors';
import ScheduleInfo from '../../components/ScheduleInfo';

function SchedulePage() {
  const sectionStyles = {
    marginTop: 25,
    backgroundColor: colors.boardComponent,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
  };
  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        minHeight: '100vh',
        flexDirection: 'column',
        alignItems: 'center',
        alignSelf: 'center',
        width: '100%',
        paddingRight: 25,
        paddingLeft: 25,
        boxSizing: 'border-box',
        backgroundColor: colors.boardBack
      }}
    >
      <div
        style={{ ...sectionStyles, backgroundColor: colors.boardBack, flex: 1 }}
      >
        <ScheduleHeader />
      </div>
      <div
        style={{
          ...sectionStyles,
          justifyContent: 'flex-start',
          flexDirection: 'column',
          flex: 10
        }}
      >
        <ScheduleBoard data={data} />
      </div>
      <Breakpoint
        large
        up
        style={{
          ...sectionStyles,
          flex: 6,
          marginBottom: 25,
          flexDirection: 'column'
        }}
      >
        <div
          style={{
            display: 'flex',
            flex: 1,
            width: '100%'
          }}
        >
          <ScheduleInfo />
        </div>
      </Breakpoint>
    </div>
  );
}

export default SchedulePage;
