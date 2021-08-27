import React from 'react';
import { Breakpoint } from 'react-socks';
import { connect, useSelector } from 'react-redux';
import styled from '@emotion/styled';
import colors from '../../styles/colors';
import NiceTrainPage from '../NiceTrainPage';
import { activeMessage, boardTrainInformation } from '../../redux/selectors';
import { NTColumn } from '../../components/layoutComponents';
import BoardInfo from './components/BoardInfo';
import BoardSchedule from './components/BoardSchedule';
import BoardHeader from './components/BoardHeader';

function SchedulePage() {
  const sectionStyles = {
    marginTop: '2vh',
    backgroundColor: colors.boardComponent,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
  };

  const data = useSelector(boardTrainInformation);
  const message = useSelector(activeMessage);

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
    <NiceTrainPage>
      <NTColumn
        style={{
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
          backgroundColor: colors.boardBack
        }}
      >
        <div
          style={{
            ...sectionStyles,
            backgroundColor: colors.boardBack,
            flex: 1
          }}
        >
          <BoardHeader />
        </div>
        <div
          style={{
            ...sectionStyles,
            justifyContent: 'flex-start',
            flexDirection: 'column',
            flex: 10
          }}
        >
          <BoardSchedule data={data} />
        </div>
        <Breakpoint
          xsmall
          up
          style={{
            ...sectionStyles,
            flex: 6,
            marginBottom: '1vh',
            flexDirection: 'column'
          }}
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
        </Breakpoint>
      </NTColumn>
    </NiceTrainPage>
  );
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SchedulePage);
