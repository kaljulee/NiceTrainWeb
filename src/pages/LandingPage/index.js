import React from 'react';
import { ReactSVG } from 'react-svg';
import nt_long_logo from '../../assets/nt_long_logo.svg';

function LandingPage(props) {
  return (
    <div
      style={{
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'space-around',
        // paddingTop: '5vh',
        backgroundColor: 'black',
        height: '100%',
        width: '100%'
      }}
    >
      <ReactSVG style={{ paddingTop: '5vh' }} src={nt_long_logo} />
    </div>
  );
}

export default LandingPage;
