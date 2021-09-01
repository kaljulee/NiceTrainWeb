import React from 'react';
import { useSelector } from 'react-redux';
import YouTubeResourceForm from './YouTubeResourceForm';
import AdminPanel from '../../../../components/Admin/AdminPanel';

function YouTubeResourcePanel() {
  const title = 'YouTube Resource';
  const listData = useSelector((state) => state.train.youTubeResources);
  const listFields = ['description', 'author', 'link'];
  return (
    <AdminPanel
      title="YouTube Resources"
      listData={listData}
      listFields={listFields}
    >
      <YouTubeResourceForm title={title} />
    </AdminPanel>
  );
}

export default YouTubeResourcePanel;
