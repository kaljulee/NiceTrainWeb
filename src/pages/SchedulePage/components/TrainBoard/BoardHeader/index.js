import React from 'react';
import { ReactSVG } from 'react-svg';
import { useCurrentWidth } from 'react-socks';
import { useTheme } from '@emotion/react';
import nt_long_logo from '../../../../../assets/svg/nt_long_logo.svg';
import breakpoints from '../../../../../styles/breakpoints';

// todo use css for styles
function BoardHeader(props) {
  const width = useCurrentWidth();
  const theme = useTheme();
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        backgroundColor: theme.background,
        height: '100%',
        width: '100%'
      }}
    >
      <ReactSVG
        src={nt_long_logo}
        style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'orange',
          flex: 2,
          minWidth: '7vh'
        }}
      />
      <div
        style={{
          backgroundColor: 'blue',
          marginLeft: '1vh',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          flex: 7
        }}
      >
        <span
          style={{
            display: 'inline-block',
            color: theme.onBackground,
            fontSize: width >= breakpoints.large ? 50 : 25,
            fontFamily: 'times new roman',
            letterSpacing: 6,
            paddingLeft: '2vh',
            fontWeight: 'bold',
            paddingTop: '1vh',
            paddingBottom: '1vh'
          }}
        >
          TRAIN INFORMATION
        </span>
      </div>
    </div>
  );
}

export default BoardHeader;
