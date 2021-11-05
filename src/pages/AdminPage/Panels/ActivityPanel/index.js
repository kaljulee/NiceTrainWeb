import React from 'react';
import { useSelector } from 'react-redux';
import ActivityForm from './ActivityForm';
import AdminPanel from '../../../../components/Admin_Old/AdminPanel';

function ActivityPanel() {
  const title = 'Activity';
  const listData = useSelector((state) => state.train.activities);
  const availableYTRs = useSelector((state) => state.train.youTubeResources);
  const listFields = ['name'];
  return (
    <AdminPanel title="Activities" listData={listData} listFields={listFields}>
      <ActivityForm title={title} youTubeResources={availableYTRs} />
    </AdminPanel>
  );
}

export default ActivityPanel;
