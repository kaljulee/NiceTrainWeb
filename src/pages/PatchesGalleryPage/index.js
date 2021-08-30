import React from 'react';
import { ReactSVG } from 'react-svg';
import { useTheme } from '@emotion/react';
import nt_120mm_horizontal from '../../assets/raster/nt_120mm_horizontal.jpg';
import bridge_and_shrimp from '../../assets/raster/bridge_and_shrimp.png';
import night_train from '../../assets/raster/night_train.jpg';
import nt_logo_landscape from '../../assets/raster/nt_logo_landscape.png';
import nt_logo_square from '../../assets/raster/nt_logo_square.png';
import other_train_bridge_and_shrimp from '../../assets/raster/other_train_bridge_and_shrimp.png';

function PatchItemRaster(props) {
  const { title, rasterSource } = props;
  const theme = useTheme();
  return (
    <div
      style={{
        backgroundColor: theme.primarySurface,
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '2vh',
        paddingTop: '2vh',
        paddingBottom: '2vh',
        paddingLeft: '5vw',
        paddingRight: '5vw',
        alignItems: 'center',
        width: '70vw'
      }}
    >
      <span
        style={{
          display: 'inline-block',
          alignSelf: 'start',
          color: theme.secondarySurface,
          backgroundColor: theme.onSecondarySurface,
          fontFamily: 'helvetica',
          paddingLeft: '1vw',
          paddingRight: '1vw',
          paddingTop: '0.5vh',
          paddingBottom: '0.5vh',
          marginBottom: '2vh',
          opacity: 0.9,
          letterSpacing: 2
        }}
      >
        {title}
      </span>
      <img style={{ width: '100%' }} src={rasterSource} alt={title} />
    </div>
  );
}

function PatchItemSVG(props) {
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
          color: 'orange',
          fontFamily: 'helvetica',
          paddingLeft: '1vw',
          paddingRight: '1vw',
          paddingTop: '0.5vh',
          paddingBottom: '0.5vh',
          marginBottom: '1vh',
          opacity: 0.6,
          border: `1px solid ${'blue'}`,
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
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <PatchItemRaster title="Nice Train" rasterSource={nt_logo_square} />
      <PatchItemRaster
        title="Shrimp and Bridge"
        rasterSource={bridge_and_shrimp}
      />
      <PatchItemRaster
        title="The Other Train"
        rasterSource={other_train_bridge_and_shrimp}
      />
      <PatchItemRaster title="Nice Train 2" rasterSource={nt_logo_landscape} />
      <PatchItemRaster title="120mm BJJ" rasterSource={nt_120mm_horizontal} />
      <PatchItemRaster title="Night Train" rasterSource={night_train} />
    </div>
  );
}

export default PatchesGalleryPage;
