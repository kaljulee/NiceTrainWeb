import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import FormatForm from './FormatForm';
import AdminPanel from '../../../../components/Admin/AdminPanel';

function FormatPanel(props) {
  const title = 'Format';
  const listData = useSelector((state) => state.train.formats);
  const listFields = ['name'];
  return (
    <AdminPanel title="Formats" listData={listData} listFields={listFields}>
      <FormatForm title={title} />
    </AdminPanel>
  );
}

export default FormatPanel;
