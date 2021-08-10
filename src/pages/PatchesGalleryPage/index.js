import React from 'react';
import { ReactSVG } from 'react-svg';
import nt_long_logo from '../../assets/nt_long_logo.svg';
import mat_pattern_square from '../../assets/mat_pattern_square.svg';
import night_train from '../../assets/night_train.svg';
import nt_120mm_bjj from '../../assets/nt_120mm_bjj.svg';
import bridge_and_shrimp from '../../assets/bridge_and_shrimp.svg';
import colors from '../../styles/colors';

function PatchItem(props) {
  const { title, svgSource } = props;
  return (
    <div
      style={{
        width: '70vw',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '5vh',
        paddingLeft: '2vw',
        paddingRight: '2vw',
        paddingBottom: '2vw'
      }}
    >
      <span
        style={{
          display: 'inline-block',
          color: colors.logoYellow,
          fontFamily: 'helvetica',
          paddingLeft: '1vw',
          paddingRight: '1vw',
          paddingTop: '0.5vh',
          paddingBottom: '0.5vh',
          marginBottom: '1vh',
          opacity: 0.6,
          border: `1px solid ${colors.logoYellow}`,
          letterSpacing: 2
        }}
      >
        {title}
      </span>
      <ReactSVG src={svgSource} />
    </div>
  );
}

function PatchesGalleryPage(props) {
  return (
    <div
      style={{
        paddingTop: '5vh',
        backgroundColor: colors.boardBack
      }}
    >
      <PatchItem title="Nice Train" svgSource={mat_pattern_square} />
      <PatchItem title="Shrimp and Bridge" svgSource={bridge_and_shrimp} />
      <PatchItem title="Nice Train 2" svgSource={nt_long_logo} />
      <PatchItem title="120mm BJJ" svgSource={nt_120mm_bjj} />
      <PatchItem title="Night Train" svgSource={night_train} />
    </div>
  );
}

export default PatchesGalleryPage;
