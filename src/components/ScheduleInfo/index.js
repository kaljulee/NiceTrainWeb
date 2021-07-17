import React, { useEffect, useState } from 'react';
import { useCurrentWidth } from 'react-socks';
import colors from '../../styles/colors';
import { FlipRow } from '../FlipText/FlipRow';
import flipConstants from '../FlipText/flipConstants';

function getWindowDimensions() {
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

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

function calculateCharacterCount(width) {
  return Math.floor(width / flipConstants.width) - 2;
}

function ScheduleInfo(props) {
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
        backgroundColor: colors.boardComponent,
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

ScheduleInfo.defaultProps = {
  messageArray: ['Default Message 1', 'Default Message 2', 'Default Message 3']
};

export default ScheduleInfo;
