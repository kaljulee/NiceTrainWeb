import React from 'react';
import { ReactSVG } from 'react-svg';
import nt_logo_404 from '../../assets/nt_logo_404.svg';

function FourOhFourPage(props) {
  return (
    <div style={{ backgroundColor: 'black', height: '100%', width: '100%' }}>
      <ReactSVG style={{ paddingTop: '5vh' }} src={nt_logo_404} />
    </div>
  );
}

export default FourOhFourPage;
