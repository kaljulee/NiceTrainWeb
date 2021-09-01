import React from 'react';
import { Breakpoint } from 'react-socks';
import { connect, useSelector } from 'react-redux';
import styled from '@emotion/styled';
import colors from '../../styles/colors';
import NiceTrainPage from '../../components/NiceTrainPage';
import { activeMessage, boardTrainInformation } from '../../redux/selectors';
import { NTColumn } from '../../components/layoutComponents';
import BoardInfo from '../../components/Board/BoardInfo';
import BoardSchedule from '../../components/Board/BoardSchedule';
import BoardHeader from '../../components/Board/BoardHeader';
import TrainBoard from '../../components/Board/TrainBoard';

const ScheduledPageWrapper = styled.div`
  background: ${(p) => p.theme.background};
  height: 100%;
  width: 100%;
  padding-top: 5vh;
  box-sizing: border-box;
`;

function SchedulePage() {
  return (
    <ScheduledPageWrapper>
      <TrainBoard />
    </ScheduledPageWrapper>
  );
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SchedulePage);
