import React from 'react';
import { ReactSVG } from 'react-svg';
import nt_long_logo from '../../assets/nt_long_logo.svg';
import NiceTrainPage from '../NiceTrainPage';

function LandingPage(props) {
  return (
    <NiceTrainPage>
      <ReactSVG style={{ paddingTop: '5vh' }} src={nt_long_logo} />
    </NiceTrainPage>
  );
}

export default LandingPage;
