import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AdminList from '../../AdminList';
import ScheduledTrainForm from './ScheduledTrainForm';
import ScheduledActivityPanel from '../ScheduledActivityPanel';

function ScheduledTrainPanel(props) {
  const title = 'ScheduledTrain';
  const listData = useSelector((state) => state.scheduledTrains);
  const listFields = ['description', 'train_date', 'train_time'];
  const [currentDatum, setCurrentDatum] = useState();
  function onDatumClick(id) {
    setCurrentDatum(listData.find((datum) => datum.id === id));
  }
  return (
    <div style={{ height: '100%' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            display: 'flex',
            flex: 4,
            flexDirection: 'column',
            marginRight: '2vw',
            marginLeft: '2vw'
          }}
        >
          <AdminList
            title={title}
            data={listData}
            fields={listFields}
            onDatumClick={onDatumClick}
          />
        </div>
        <div
          style={{
            flex: 5,
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '2vw',
            marginRight: '2vw'
          }}
        >
          <div style={{ display: 'flex' }}>
            <ScheduledTrainForm title={title} currentDatum={currentDatum} />
            <ScheduledActivityPanel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScheduledTrainPanel;
