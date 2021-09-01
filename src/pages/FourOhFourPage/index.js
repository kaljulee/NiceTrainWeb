import React from 'react';
import { ReactSVG } from 'react-svg';
import nt_logo_404 from '../../assets/svg/nt_logo_404.svg';
import NiceTrainPage from '../../components/NiceTrainPage';

function FourOhFourPage(props) {
  return (
    <NiceTrainPage>
      <ReactSVG style={{ paddingTop: '5vh' }} src={nt_logo_404} />
    </NiceTrainPage>
  );
}

export default FourOhFourPage;
