import React from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import TrainBoard from '../../components/Board/TrainBoard';

const ScheduledPageWrapper = styled.div`
  background: ${(p) => p.theme.background};
  // height: 100%;
  // width: 100%;
  grid-area: body;
  // padding-top: 5vh;
  // box-sizing: border-box;
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
