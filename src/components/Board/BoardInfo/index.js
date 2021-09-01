import React, { useEffect, useState } from 'react';
import { useCurrentWidth } from 'react-socks';
import styled from '@emotion/styled';
import { FlipRow } from '../FlipText/FlipRow';
import flipConstants from '../FlipText/flipConstants';

const InfoContainer = styled.div`
  background: ${(p) => p.theme.background};
  width: 100%;
  padding: 1vh 1vw 1vh 1vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  align-self: center;
`;

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

function createMessageArray(words, rowSize, minRowCount) {
  let row = 0;
  const messageArray = words.reduce((acc, w) => {
    // if there is no current line and max line cont has not been hit
    if (
      !acc[row] // && row < rowCount
    ) {
      acc.push(w);
      return acc;
    }
    if (
      acc[row].length + w.length + 1 <
      rowSize
      // || row >= rowCount - 1
    ) {
      acc[row] = `${acc[row]} ${w}`;
      return acc;
    }
    row += 1;
    acc.push(w);
    return acc;
  }, []);
  while (messageArray.length < minRowCount) {
    messageArray.push('');
  }
  return messageArray;
}

function BoardInfo(props) {
  const { message } = props;
  const [characterCount, setCharacterCount] = useState(
    calculateCharacterCount(0)
  );
  const [messageArray, setMessageArray] = useState([message]);
  const width = useCurrentWidth();
  const { height: dimH, width: dimW } = useWindowDimensions();

  // trigger on window changes as well as react-socks width
  // to avoid being stuck on some weird wrong width
  useEffect(() => {
    setCharacterCount(calculateCharacterCount(width) - 4);
  }, [width, dimW, dimH]);
  useEffect(() => {
    const words = message.split(' ');
    const newMessageArray = createMessageArray(words, characterCount, 4);
    setMessageArray(newMessageArray);
  }, [characterCount, message]);
  return (
    <InfoContainer>
      {messageArray.map((m, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <FlipRow key={`${i}_info_row`} message={m} rowLength={characterCount} />
      ))}
    </InfoContainer>
  );
}

BoardInfo.defaultProps = {
  message: 'Default Message'
};

export default BoardInfo;
