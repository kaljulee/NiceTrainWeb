import React from 'react';
import { Breakpoint } from 'react-socks';
import { connect, useSelector } from 'react-redux';
import styled from '@emotion/styled';
import colors from '../../styles/colors';
import NiceTrainPage from '../NiceTrainPage';
import { activeMessage, boardTrainInformation } from '../../redux/selectors';
import { NTColumn } from '../../components/layoutComponents';
import BoardInfo from './components/TrainBoard/BoardInfo';
import BoardSchedule from './components/TrainBoard/BoardSchedule';
import BoardHeader from './components/TrainBoard/BoardHeader';
import TrainBoard from './components/TrainBoard';

const ScheduledPageWrapper = styled.div`
  background: ${(p) => p.theme.background};
  height: 100%;
  width: 100%;
  padding-top: 5vh;
  box-sizing: border-box;
`;

function SchedulePage() {
  // style={{
  //     display: 'flex',
  //         height: '100%',
  //         minHeight: '100vh',
  //         flexDirection: 'column',
  //         alignItems: 'center',
  //         alignSelf: 'center',
  //         width: '100%',
  //         paddingLeft: '1vw',
  //         paddingRight: '1vw',
  //         boxSizing: 'border-box',
  //         backgroundColor: colors.boardBack
  // }}

  return (
    <ScheduledPageWrapper>
      <TrainBoard />
    </ScheduledPageWrapper>
  );
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SchedulePage);
