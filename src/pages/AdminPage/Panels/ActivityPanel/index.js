import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AdminList from '../../components/AdminList';
import ActivityForm from './ActivityForm';
import { NTColumn, NTPanel } from '../../../../components/layoutComponents';

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
    <NTPanel>
      <NTColumn>
        <AdminList
          title={title}
          data={listData}
          fields={listFields}
          onDatumClick={onDatumClick}
        />
      </NTColumn>
      <NTColumn>
        <ActivityForm
          title={title}
          currentDatum={currentDatum}
          youTubeResources={availableYTRs}
        />
      </NTColumn>
    </NTPanel>
  );
}

export default ActivityPanel;
