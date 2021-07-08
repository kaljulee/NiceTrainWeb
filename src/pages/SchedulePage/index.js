import React from 'react';
import ScheduleBoard from '../../components/ScheduleBoard';
import data from '../../data';
import ScheduleHeader from '../../components/ScheduleHeader';
import colors from '../../styles/colors';
import ScheduleInfo from '../../components/ScheduleInfo';

function SchedulePage() {
  const sectionStyles = {
    marginTop: 25,
    // marginBottom: 5,
    backgroundColor: colors.boardComponent,
    width: '100%',
    alignItems: 'center'
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
        backgroundColor: colors.boardBack
      }}
    >
      <div style={{ ...sectionStyles, backgroundColor: colors.boardBack }}>
        <ScheduleHeader />
      </div>
      <div
        style={{
          ...sectionStyles,
          flex: 10
        }}
      >
        <ScheduleBoard data={data} />
      </div>
      <div
        style={{
          ...sectionStyles,
          flex: 6,
          marginBottom: 25
        }}
      >
        <ScheduleInfo />
      </div>
    </div>
  );
}

export default SchedulePage;
