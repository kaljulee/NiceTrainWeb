import React from 'react';
import ReactList from 'react-list';
import {
  NTList,
  NTListItem,
  NTListItemField,
  NTSubTitle,
} from '../../styledComponents';
import { NTBox } from '../../layoutComponents';

// todo this needs to handle fields that are IDs,
// todo needs a way to get the relevant info about related data
function AdminList(props) {
  const { title, data, fields, onDatumClick, activeID, maxHeight, minHeight } =
    props;

  function handleDatumClick(id) {
    onDatumClick(id);
  }

  return (
    <NTBox>
      {title && <NTSubTitle>{`${title}`}</NTSubTitle>}
      <NTList
        style={{
          maxHeight,
          minHeight,
          overflow: 'auto',
        }}
      >
        <ReactList
          type='uniform'
          length={data.length}
          itemRenderer={(index, key) => (
            <NTListItem key={key}>
              {fields.map((field) => (
                <NTListItemField
                  key={`${index}${field}`}
                  onClick={() => handleDatumClick(data[index].id)}
                  onKeyDown={() => handleDatumClick(data[index].id)}
                  role='button'
                  tabIndex={0}
                  $isActive={activeID === data[index].id}
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
  maxHeight: '60vh',
  minHeight: '5vh',
  data: [],
};

export default AdminList;
