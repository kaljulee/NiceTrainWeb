import React from 'react';
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
  const { url } = props;
  return (
    <ResponsiveWrapper>
      <StyledPlayer width="100%" height="100%" url={url} />
    </ResponsiveWrapper>
  );
}

export default VideoPlayer;
