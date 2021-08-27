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
`;

const BoardSection = styled.div`
  margin-top: 2vh;
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
      <BoardSection
        $flex={1}
        style={
          {
            //      backgroundColor: colors.boardBack,
            // flex: 1
          }
        }
      >
        <BoardHeader />
      </BoardSection>
      <BoardSection
        $flex={10}
        style={{
          justifyContent: 'flex-start',
          alignItems: 'flex-start'
          // flexDirection: 'column',
          // flex: 10
        }}
      >
        <BoardSchedule data={data} />
      </BoardSection>
      <BoardSection
        $flex={6}
        style={
          {
            // flex: 6,
            // marginBottom: '1vh',
            // flexDirection: 'column'
          }
        }
      >
        <div
          style={{
            display: 'flex',
            flex: 1,
            width: '100%',
            justifyContent: 'center'
          }}
        >
          <BoardInfo messageArray={[message]} />
        </div>
      </BoardSection>
    </BoardWrapper>
  );
}

export default TrainBoard;
