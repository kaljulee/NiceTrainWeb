import React from 'react';
import { useSelector } from 'react-redux';
import StationForm from './StationForm';
import AdminPanel from '../../../../components/Admin_Old/AdminPanel';

function StationPanel() {
  const title = 'Station';
  const listData = useSelector((state) => state.train.stations);
  const listFields = ['name', 'abbrev'];
  return (
    <AdminPanel title='Stations' listData={listData} listFields={listFields}>
      <StationForm title={title} />
    </AdminPanel>
  );
}

export default StationPanel;
