import React from 'react';
import { ReactSVG } from 'react-svg';
import { useCurrentWidth } from 'react-socks';
import nt_long_logo from '../../assets/nt_long_logo.svg';
import colors from '../../styles/colors';
import breakpoints from '../../styles/breakpoints';

function ScheduleHeader(props) {
  const width = useCurrentWidth();
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        backgroundColor: colors.boardBack,
        height: '100%',
        width: '100%'
      }}
    >
      <ReactSVG
        src={nt_long_logo}
        style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: colors.boardComponent,
          flex: 2
        }}
      />
      <div
        style={{
          backgroundColor: colors.boardComponent,
          marginLeft: 25,
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          flex: 7
        }}
      >
        <span
          style={{
            display: 'inline-block',
            color: colors.boardLettering,
            fontSize: width >= breakpoints.large ? 50 : 20,
            fontFamily: 'times new roman',
            letterSpacing: 6,
            paddingLeft: 15,
            fontWeight: 'bold'
          }}
        >
          TRAIN INFORMATION
        </span>
      </div>
    </div>
  );
}

export default ScheduleHeader;
