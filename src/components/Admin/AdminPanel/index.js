import React, { useState, useEffect } from 'react';
import { NTColumn, NTPanel } from '../../layoutComponents';
import { NTLabel } from '../../styledComponents';
import AdminList from '../AdminList';

function AdminPanel(props) {
  // todo onCurnentDatumChange is the symtom of currentDatum being held in a weird place
  const {
    title,
    listData,
    listFields,
    enforceDirection,
    onCurrentDatumChange,
    maxListHeight,
    minListHeight
  } = props;
  const [currentDatum, setCurrentDatum] = useState();

  function onDatumClick(id) {
    setCurrentDatum(listData.find((datum) => datum.id === id));
    // todo this is here until i fix currentDatum
    onCurrentDatumChange(id);
  }

  function updateChildrenWithProps(children) {
    const childrenArray = React.Children.toArray(children);
    return React.Children.map(childrenArray, (c) => {
      if (React.isValidElement(c)) {
        return React.cloneElement(c, {
          currentDatum,
          clearCurrentDatum: () => setCurrentDatum()
        });
      }
      return c;
    });
  }

  const [childrenWithProps, setChildrenWithProps] = useState(
    updateChildrenWithProps(props.children)
  );

  useEffect(() => {
    setChildrenWithProps(updateChildrenWithProps(props.children));
  }, [currentDatum, setCurrentDatum]);

  return (
    <NTPanel style={{ flexDirection: enforceDirection }}>
      <NTColumn>
        <NTLabel>{title}</NTLabel>
        <AdminList
          minHeight={minListHeight}
          maxHeight={maxListHeight}
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
  maxListHeight: '20vh',
  minListHeight: '5vh',
  onCurrentDatumChange: () => {}
};

export default AdminPanel;
