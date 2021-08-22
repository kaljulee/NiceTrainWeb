import React from 'react';
import { NTRow } from '../../../components/layoutComponents';
import {
  NTNewButton,
  NTSaveButton,
  NTDeleteButton
} from '../../../components/styledComponents';

function AdminSubmitButtonBar(props) {
  const { handleCreate, handleDelete, handleUpdate } = props;
  return (
    <NTRow style={{ justifyContent: 'space-between' }}>
      <NTSaveButton type="submit" onClick={handleUpdate}>
        save
      </NTSaveButton>
      <NTNewButton onClick={handleCreate} type="button">
        new
      </NTNewButton>
      <NTDeleteButton onClick={handleDelete} type="button">
        delete
      </NTDeleteButton>
    </NTRow>
  );
}

export default AdminSubmitButtonBar;
