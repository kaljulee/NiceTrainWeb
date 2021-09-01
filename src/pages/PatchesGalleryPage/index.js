import React from 'react';
import { ReactSVG } from 'react-svg';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import nt_120mm_horizontal from '../../assets/raster/nt_120mm_horizontal.jpg';
import bridge_and_shrimp from '../../assets/raster/bridge_and_shrimp.png';
import night_train from '../../assets/raster/night_train.jpg';
import nt_logo_landscape from '../../assets/raster/nt_logo_landscape.png';
import nt_logo_square from '../../assets/raster/nt_logo_square.png';
import other_train_bridge_and_shrimp from '../../assets/raster/other_train_bridge_and_shrimp.png';

const PatchPageContainer = styled.div`
  padding-top: 5vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PatchContainer = styled.div`
  background-color: ${(p) => p.theme.primarySurface};
  display: flex;
  flex-direction: column;
  margin-bottom: 2vh;
  padding-top: 2vh;
  padding-bottom: 2vh;
  padding-left: 5vw;
  padding-right: 5vw;
  align-items: center;
  width: 70vw;
`;

const PatchLabel = styled.span`
  display: inline-block;
  align-self: start;
  color: ${(p) => p.theme.accent};
  background-color: ${(p) => p.theme.secondarySurface};
  font-family: helvetica;
  padding-left: 1vw;
  padding-right: 1vw;
  padding-top: 0.5vh;
  padding-bottom: 0.5vh;
  margin-bottom: 2vh;
  opacity: 1;
  letter-spacing: 2;
`;

function PatchItemRaster(props) {
  const { title, rasterSource } = props;
  return (
    <PatchContainer>
      <PatchLabel>{title}</PatchLabel>
      <img style={{ width: '100%' }} src={rasterSource} alt={title} />
    </PatchContainer>
  );
}

// function PatchItemSVG(props) {
//   const { title, svgSource } = props;
//   return (
//     <div
//       style={{
//         width: '70vw',
//         marginLeft: 'auto',
//         marginRight: 'auto',
//         marginBottom: '5vh',
//         paddingLeft: '2vw',
//         paddingRight: '2vw',
//         paddingBottom: '2vw'
//       }}
//     >
//       <span
//         style={{
//           display: 'inline-block',
//           color: 'orange',
//           fontFamily: 'helvetica',
//           paddingLeft: '1vw',
//           paddingRight: '1vw',
//           paddingTop: '0.5vh',
//           paddingBottom: '0.5vh',
//           marginBottom: '1vh',
//           opacity: 0.6,
//           border: `1px solid ${'blue'}`,
//           letterSpacing: 2
//         }}
//       >
//         {title}
//       </span>
//       <ReactSVG src={svgSource} />
//     </div>
//   );
// }

function PatchesGalleryPage() {
  return (
    <PatchPageContainer>
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
    </PatchPageContainer>
  );
}

export default PatchesGalleryPage;
