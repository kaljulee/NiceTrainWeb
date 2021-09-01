import React from 'react';
import { NTRow } from '../../layoutComponents';
import {
  NTNewButton,
  NTSaveButton,
  NTDeleteButton
} from '../../styledComponents';

function AdminSubmitButtonBar(props) {
  const {
    handleCreate,
    handleDelete,
    handleUpdate,
    hasCurrentDatum,
    clearCurrentDatum
  } = props;
  return (
    <NTRow style={{ justifyContent: 'space-between' }}>
      <NTSaveButton
        disabled={!hasCurrentDatum}
        type="submit"
        onClick={handleUpdate}
      >
        modify
      </NTSaveButton>
      <NTNewButton
        onClick={hasCurrentDatum ? clearCurrentDatum : handleCreate}
        type="button"
      >
        {hasCurrentDatum ? 'clear selected' : `save new`}
      </NTNewButton>
      <NTDeleteButton onClick={handleDelete} type="button">
        delete
      </NTDeleteButton>
    </NTRow>
  );
}

export default AdminSubmitButtonBar;
