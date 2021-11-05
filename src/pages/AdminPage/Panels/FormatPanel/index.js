import React from 'react';
import { useSelector } from 'react-redux';
import FormatForm from './FormatForm';
import AdminPanel from '../../../../components/Admin_Old/AdminPanel';

function FormatPanel() {
  const title = 'Format';
  const listData = useSelector((state) => state.train.formats);
  const listFields = ['name'];
  return (
    <AdminPanel title='Formats' listData={listData} listFields={listFields}>
      <FormatForm title={title} />
    </AdminPanel>
  );
}

export default FormatPanel;
