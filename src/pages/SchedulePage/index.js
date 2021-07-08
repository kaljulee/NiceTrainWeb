import React from 'react';
import ScheduleBoard from '../../components/ScheduleBoard';
import data from '../../data';
import ScheduleHeader from '../../components/ScheduleHeader';
import colors from '../../styles/colors';
import ScheduleInfo from '../../components/ScheduleInfo';

function SchedulePage() {
  const sectionStyles = {
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: colors.boardComponent
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
        backgroundColor: colors.boardBack,
        flex: 1
      }}
    >
      <div style={{ ...sectionStyles, marginTop: 10, marginBottom: 10 }}>
        <ScheduleHeader />
      </div>
      <div
        style={{
          ...sectionStyles,
          flex: 6,
          width: '100%'
        }}
      >
        <ScheduleBoard data={data} />
      </div>
      <div
        style={{
          ...sectionStyles,
          flex: 2,
          width: '100%',
          marginBottom: 10
        }}
      >
        <ScheduleInfo />
      </div>
    </div>
  );
}

export default SchedulePage;
