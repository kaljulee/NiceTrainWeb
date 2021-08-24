import React, { useState, useEffect } from 'react';
import { NTColumn, NTPanel } from '../../../components/layoutComponents';
import { NTLabel } from '../../../components/styledComponents';
import AdminList from '../components/AdminList';

function AdminPanel(props) {
  const { title, listData, listFields } = props;
  const [currentDatum, setCurrentDatum] = useState();

  function onDatumClick(id) {
    setCurrentDatum(listData.find((datum) => datum.id === id));
  }

  const [childrenWithProps, setChildrenWithProps] = useState(
    React.cloneElement(props.children, {
      currentDatum,
      clearCurrentDatum: () => setCurrentDatum()
    })
  );

  useEffect(() => {
    setChildrenWithProps(
      React.cloneElement(props.children, {
        currentDatum,
        clearCurrentDatum: () => setCurrentDatum()
      })
    );
  }, [currentDatum, setCurrentDatum]);

  return (
    <NTPanel>
      <NTColumn>
        <NTLabel>{title}</NTLabel>
        <AdminList
          data={listData}
          fields={listFields}
          activeID={currentDatum ? currentDatum.id : undefined}
          onDatumClick={onDatumClick}
        />
      </NTColumn>
      <NTColumn>{childrenWithProps}</NTColumn>
    </NTPanel>
  );
}

export default AdminPanel;
