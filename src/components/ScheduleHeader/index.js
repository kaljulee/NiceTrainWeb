import React from 'react';
import { ReactSVG } from 'react-svg';
import nt_long_logo from '../../assets/nt_long_logo.svg';
import colors from '../../styles/colors';

function ScheduleHeader(props) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        backgroundColor: colors.boardBack,
        height: '100%',
        width: '80%'
      }}
    >
      <ReactSVG
        src={nt_long_logo}
        style={{
          marginTop: 10,
          marginBottom: 10,
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: colors.boardComponent,
          marginRight: 10
        }}
      />
      <div
        style={{
          backgroundColor: colors.boardComponent,
          width: '100%',
          marginRight: '10%',
          marginTop: 10,
          marginBottom: 10,
          marginLeft: 10,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <span
          style={{
            display: 'inline-block',
            color: colors.boardLettering,
            fontSize: 50,
            fontFamily: 'times new roman'
          }}
        >
          TRAIN INFORMATION
        </span>
      </div>
    </div>
  );
}

export default ScheduleHeader;
