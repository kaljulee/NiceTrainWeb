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
`;

const BoardSection = styled.div`
  margin-top: 2vh;
  box-sizing: border-box;
  background-color: ${(p) => p.theme.background};
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex: ${(p) => p.$flex};
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
      <BoardSection $flex={1}>
        <BoardHeader />
      </BoardSection>
      <BoardSection
        $flex={10}
        style={{
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          overflowY: 'scroll'
        }}
      >
        <BoardSchedule data={data} setTrainID={handleSetTrainID} />
      </BoardSection>
      <BoardSection $flex={4}>
        <BoardInfo message={message} />
      </BoardSection>
      <TrainDetails trainID={trainID} clearTrainID={clearTrainID} />
    </BoardWrapper>
  );
}

export default TrainBoard;
