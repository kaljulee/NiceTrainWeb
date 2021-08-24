import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AdminList from '../../components/AdminList';
import FormatForm from './FormatForm';
import { NTColumn, NTPanel } from '../../../../components/layoutComponents';

function FormatPanel(props) {
  const title = 'Format';
  const listData = useSelector((state) => state.train.formats);
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
        <FormatForm title={title} currentDatum={currentDatum} />
      </NTColumn>
    </NTPanel>
  );
}

export default FormatPanel;
