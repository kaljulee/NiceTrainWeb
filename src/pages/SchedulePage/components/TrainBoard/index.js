import { Breakpoint } from 'react-socks';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from '@emotion/styled';
import BoardHeader from './BoardHeader';
import BoardSchedule from './BoardSchedule';
import BoardInfo from './BoardInfo';
import { NTColumn } from '../../../../components/layoutComponents';
import {
  activeMessage,
  boardTrainInformation
} from '../../../../redux/selectors';

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

  return (
    <BoardWrapper>
      <BoardSection $flex={1}>
        <BoardHeader />
      </BoardSection>
      <BoardSection
        $flex={10}
        style={{
          justifyContent: 'flex-start',
          alignItems: 'flex-start'
        }}
      >
        <BoardSchedule data={data} />
      </BoardSection>
      <BoardSection $flex={4}>
        <BoardInfo message={message} />
      </BoardSection>
    </BoardWrapper>
  );
}

export default TrainBoard;