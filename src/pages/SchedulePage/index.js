import React, { useEffect } from 'react';
import { Breakpoint } from 'react-socks';
import { connect, useSelector, useDispatch } from 'react-redux';
import ScheduleBoard from '../../components/ScheduleBoard';
import data from '../../data';
import ScheduleHeader from '../../components/ScheduleHeader';
import colors from '../../styles/colors';
import ScheduleInfo from '../../components/ScheduleInfo';
import { fetchYouTubeResources } from '../../redux/reducers/trainReducer';
import { callListStations } from '../../redux/thunks/station';
import NiceTrainPage from '../NiceTrainPage';

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

  const stations = useSelector((state) => state.stations);
  const dispatch = useDispatch();
  console.log('stations');
  console.log(stations);
  useEffect(() => {
    console.log('dispatching fetch stations');
    dispatch(callListStations());
  }, []);
  useEffect(() => {
    console.log('dispatching fetch TYR');
    dispatch(fetchYouTubeResources());
  }, []);

  return (
    <NiceTrainPage>
      <div
        style={{
          display: 'flex',
          height: '100%',
          minHeight: '100vh',
          flexDirection: 'column',
          alignItems: 'center',
          alignSelf: 'center',
          width: '100%',
          // padding: '1vh',
          paddingLeft: '1vw',
          paddingRight: '1vw',
          boxSizing: 'border-box',
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
          <ScheduleHeader />
        </div>
        <div
          style={{
            ...sectionStyles,
            justifyContent: 'flex-start',
            flexDirection: 'column',
            flex: 10
          }}
        >
          <ScheduleBoard data={data} />
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
            <ScheduleInfo />
          </div>
        </Breakpoint>
      </div>
    </NiceTrainPage>
  );
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SchedulePage);
