import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from '@emotion/styled';
import BoardHeader from '../BoardHeader';
import BoardSchedule from '../BoardSchedule';
import BoardInfo from '../BoardInfo';
import { NTColumn } from '../../layoutComponents';
import { activeMessage, boardTrainInformation } from '../../../redux/selectors';
import TrainDetails from '../../TrainPamphlet/TrainSchedulePamphlet';

const BoardWrapper = styled(NTColumn)`
  background: ${(p) => p.theme.primarySurface};
  box-sizing: border-box;
  padding: 0 2vw 2vw 2vw;
  display: grid;
  height: 100%;
  grid-template-rows: 15% 55% 30%;
  grid-template-areas:
    'header'
    'schedule'
    'message';
`;

const BoardSection = styled.div`
  grid-area: ${(p) => p.area};
  margin-top: 2vh;
  box-sizing: border-box;
  background-color: ${(p) => p.theme.background};
  width: 100%;
  justify-content: center;
  display: flex;
`;

const ScrollingSection = styled(BoardSection)`
  ::-webkit-scrollbar {
    background-color: ${(p) => p.theme.background};
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${(p) => p.theme.background};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(p) => p.theme.secondarySurface};
  }
  overflow-y: scroll;
`;

function TrainBoard() {
  const data = useSelector(boardTrainInformation);
  const message = useSelector(activeMessage);
  const [trainID, setTrainID] = useState(false);

  function clearTrainID() {
    setTrainID(false);
  }

  function handleSetTrainID(id) {
    setTrainID(id);
  }

  return (
    <BoardWrapper>
      <BoardSection area='header'>
        <BoardHeader />
      </BoardSection>
      <ScrollingSection
        area='schedule'
        style={{
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          overflowY: 'scroll',
        }}
      >
        <BoardSchedule data={data} setTrainID={handleSetTrainID} />
      </ScrollingSection>
      <ScrollingSection area='message'>
        <BoardInfo message={message} />
      </ScrollingSection>
      <TrainDetails trainID={trainID} clearTrainID={clearTrainID} />
    </BoardWrapper>
  );
}

export default TrainBoard;
