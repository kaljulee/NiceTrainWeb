import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import {
  callCreateFormat,
  callDeleteFormat,
  callUpdateFormat
} from '../../../../redux/thunks/format';
import { formatValidator } from '../../../../redux/validators';
import AdminInput from '../../../../components/Admin/AdminInput';
import AdminSubmitButtonBar from '../../../../components/Admin/AdminSubmitButtonBar';
import { NTBox, NTColumn } from '../../../../components/layoutComponents';

function FormatForm(props) {
  const { title, currentDatum, clearCurrentDatum } = props;
  const dispatch = useDispatch();
  const [nameValue, setNameValue] = useState(currentDatum.name);

  useEffect(() => {
    setNameValue(currentDatum.name);
  }, [title, currentDatum]);

  function handleNameChange(event) {
    setNameValue(event.target.value);
  }

  function handleUpdate() {
    const updatedFormat = {
      name: nameValue,
      id: currentDatum.id
    };
    const formatValidation = formatValidator(updatedFormat);
    if (!formatValidation.isOk) {
      toast.error(formatValidation.error);
      return;
    }
    dispatch(callUpdateFormat(updatedFormat));
  }

  function handleCreate() {
    const newFormat = {
      name: nameValue
    };
    const formatValidation = formatValidator(newFormat);
    if (!formatValidation.isOk) {
      toast.error(formatValidation.error);
      return;
    }
    dispatch(callCreateFormat(newFormat));
    clearCurrentDatum();
  }

  function handleDelete() {
    dispatch(callDeleteFormat({ id: currentDatum.id }));
    clearCurrentDatum();
  }
  return (
    <NTBox>
      <NTColumn>
        <AdminInput
          label="name"
          value={nameValue}
          onChange={handleNameChange}
        />
        <AdminSubmitButtonBar
          hasCurrentDatum={!!currentDatum.id}
          clearCurrentDatum={clearCurrentDatum}
          handleCreate={handleCreate}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />
      </NTColumn>
      <Toaster />
    </NTBox>
  );
}

FormatForm.defaultProps = {
  currentDatum: {}
};

export default FormatForm;
