import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AdminList from '../../components/AdminList';
import YouTubeResourceForm from './YouTubeResourceForm';
import { NTColumn, NTPanel } from '../../../../components/layoutComponents';

function YouTubeResourcePanel(props) {
  const title = 'YouTube Resource';
  const listData = useSelector((state) => state.train.youTubeResources);
  const listFields = ['description', 'author', 'link'];
  const [currentDatum, setCurrentDatum] = useState();
  function onDatumClick(id) {
    setCurrentDatum(listData.find((datum) => datum.id === id));
  }
  return (
    <NTPanel>
      <NTColumn>
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
      </NTColumn>
      <NTColumn>
        <YouTubeResourceForm title={title} currentDatum={currentDatum} />
      </NTColumn>
    </NTPanel>
  );
}

export default YouTubeResourcePanel;
