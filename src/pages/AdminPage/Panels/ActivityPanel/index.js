import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AdminList from '../../components/AdminList';
import ActivityForm from './ActivityForm';

function ActivityPanel(props) {
  const title = 'Activity';
  const listData = useSelector((state) => state.train.activities);
  const availableYTRs = useSelector((state) => state.train.youTubeResources);
  const listFields = ['name'];
  const [currentDatum, setCurrentDatum] = useState();
  function onDatumClick(id) {
    setCurrentDatum(listData.find((datum) => datum.id === id));
  }
  return (
    <div style={{ height: '100%' }}>
      <div style={{ display: 'flex' }}>
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
          <ActivityForm
            title={title}
            currentDatum={currentDatum}
            youTubeResources={availableYTRs}
          />
        </div>
      </div>
    </div>
  );
}

export default ActivityPanel;
