import React, { useState, useEffect } from 'react';
import { NTColumn, NTPanel } from '../../../components/layoutComponents';
import { NTLabel } from '../../../components/styledComponents';
import AdminList from '../components/AdminList';

function AdminPanel(props) {
  // todo onCurnentDatumChange is the symtom of currentDatum being held in a weird place
  const {
    title,
    listData,
    listFields,
    enforceDirection,
    onCurrentDatumChange
  } = props;
  const [currentDatum, setCurrentDatum] = useState();

  function onDatumClick(id) {
    setCurrentDatum(listData.find((datum) => datum.id === id));
    // todo this is here until i fix currentDatum
    onCurrentDatumChange(id);
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
    <NTPanel style={{ flexDirection: enforceDirection }}>
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

AdminPanel.defaultProps = {
  onCurrentDatumChange: () => {}
};

export default AdminPanel;
