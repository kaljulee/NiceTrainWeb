import React, { useState } from 'react';
import ReactList from 'react-list';
import {
  NTList,
  NTListItem,
  NTListItemField,
  NTSubTitle,
  NTTitle
} from '../../../../components/styledComponents';
import { NTBox } from '../../../../components/layoutComponents';

// todo this needs to handle fields that are IDs,
// todo needs a way to get the relevant info about related data
function AdminList(props) {
  const { title, data, fields, onDatumClick } = props;
  const [activeDatumID, setActiveDatumID] = useState();

  function handleDatumClick(id) {
    setActiveDatumID(id);
    onDatumClick(id);
  }

  return (
    <NTBox>
      {title && <NTSubTitle>{`${title}`}</NTSubTitle>}
      <NTList style={{ maxHeight: '60vh', overflow: 'auto' }}>
        <ReactList
          type="uniform"
          length={data.length}
          itemRenderer={(index, key) => (
            <NTListItem key={key}>
              {fields.map((field) => (
                <NTListItemField
                  key={`${index}${field}`}
                  onClick={() => handleDatumClick(data[index].id)}
                  onKeyDown={() => handleDatumClick(data[index].id)}
                  role="button"
                  tabIndex={0}
                  $isActive={activeDatumID === data[index].id}
                >
                  {data[index][field]}
                </NTListItemField>
              ))}
            </NTListItem>
          )}
        />
      </NTList>
    </NTBox>
  );
}

AdminList.defaultProps = {
  data: []
};

export default AdminList;
