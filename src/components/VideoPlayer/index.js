import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import styled from '@emotion/styled';

const ResponsiveWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
`;

const StyledPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;

function VideoPlayer(props) {
  const { url, size } = props;
  const [playerDims, setPlayerDims] = useState([1, 1]);
  const [paddingStyle, setPaddingStyle] = useState({
    paddingLeft: 1,
    paddingRight: 1,
    paddingTop: 1,
    paddingBottom: 1
  });

  useEffect(() => {
    const { width, height } = size;
    // get normalized values
    const normalWidth = Math.floor(width / 16);
    const normalHeight = Math.floor(height / 9);
    let newHeight = height;
    let newWidth = width;
    // possible dimension scenarios
    // too tall
    if (normalWidth < normalHeight) {
      newHeight = Math.floor(normalWidth * 9);
      setPlayerDims([width, newHeight]);
      // 16:9
    } else if (normalHeight === normalWidth) {
      setPlayerDims([width, height]);
      // too wide
    } else {
      newWidth = Math.floor(normalHeight * 16);
      setPlayerDims([newWidth, height]);
    }
    // calculate padding
    const widthPadding = Math.floor((width - newWidth) / 2);
    const heightPadding = Math.floor((height - newHeight) / 2);
    setPaddingStyle({
      paddingTop: heightPadding,
      paddingBottom: heightPadding,
      paddingLeft: widthPadding,
      paddingRight: widthPadding
    });
  }, [size]);

  return (
    <ResponsiveWrapper>
      <StyledPlayer
        width={`${playerDims[0]}px`}
        height={`${playerDims[1]}px`}
        url={url}
        style={paddingStyle}
      />
    </ResponsiveWrapper>
  );
}

export default VideoPlayer;
