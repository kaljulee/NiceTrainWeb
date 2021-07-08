import React from 'react';
import { ReactSVG } from 'react-svg';
import nt_long_logo from '../../assets/nt_long_logo.svg';
import ScheduleBoard from '../../components/ScheduleBoard';
import data from '../../data';

function SchedulePage() {
  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        minHeight: '100vh',
        flexDirection: 'column',
        width: '100%',
        border: '5px solid red',
        alignItems: 'center'
      }}
    >
      <div
        style={{
          display: 'flex',
          border: '5px solid blue',
          justifyContent: 'center',
          alignItems: 'center',
          width: '80%'
        }}
      >
        <ReactSVG style={{ width: '100%' }} src={nt_long_logo} />
      </div>
      <div
        style={{
          display: 'flex',
          flex: '5',
          border: '5px solid green',
          width: '80%'
        }}
      >
        <ScheduleBoard data={data} />
      </div>
    </div>
  );
}

export default SchedulePage;
