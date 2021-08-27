import React, { useEffect, useState } from 'react';
import { useCurrentWidth } from 'react-socks';
import { FlipRow } from '../../../../../components/FlipText/FlipRow';
import flipConstants from '../../../../../components/FlipText/flipConstants';

function getWindowDimensions() {
  // eslint-disable-next-line no-undef
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    // eslint-disable-next-line no-undef
    window.addEventListener('resize', handleResize);
    // eslint-disable-next-line no-undef
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

function calculateCharacterCount(width) {
  return Math.floor(width / flipConstants.width) - 2;
}

function BoardInfo(props) {
  const { messageArray } = props;
  const [characterCount, setCharacterCount] = useState(
    calculateCharacterCount(0)
  );
  const width = useCurrentWidth();
  const { height: dimH, width: dimW } = useWindowDimensions();

  // trigger on window changes as well as react-socks width
  // to avoid being stuck on some weird wrong width
  useEffect(() => {
    setCharacterCount(calculateCharacterCount(width) - 4);
  }, [width, dimW, dimH]);
  return (
    <div
      style={{
        backgroundColor: 'orange',
        width: '100%',
        padding: '1vh 1vw 1vh 1vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <FlipRow message={messageArray[0]} rowLength={characterCount} />
      <FlipRow message={messageArray[1]} rowLength={characterCount} />
      <FlipRow message={messageArray[2]} rowLength={characterCount} />
    </div>
  );
}

BoardInfo.defaultProps = {
  messageArray: ['Default Message 1', 'Default Message 2', 'Default Message 3']
};

export default BoardInfo;
