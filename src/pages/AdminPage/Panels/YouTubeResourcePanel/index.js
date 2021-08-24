import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AdminList from '../../components/AdminList';
import YouTubeResourceForm from './YouTubeResourceForm';

function YouTubeResourcePanel(props) {
  const title = 'YouTube Resource';
  const listData = useSelector((state) => state.train.youTubeResources);
  const listFields = ['description', 'author', 'link'];
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
          <YouTubeResourceForm title={title} currentDatum={currentDatum} />
        </div>
      </div>
    </div>
  );
}

export default YouTubeResourcePanel;
