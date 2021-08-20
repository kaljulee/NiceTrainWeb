import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import {
  callCreateFormat,
  callDeleteFormat,
  callUpdateFormat
} from '../../../../redux/thunks/format';
import { formatValidator } from '../../../../redux/validators';
import AdminInput from '../../AdminInput';
import AdminSubmitButtonBar from '../../AdminSubmitButtonBar';

function FormatForm(props) {
  const { title, currentDatum } = props;
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
  }

  function handleDelete() {
    dispatch(callDeleteFormat({ id: currentDatum.id }));
  }
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <h2 style={{ color: 'goldenrod' }}>{`Edit ${title}`}</h2>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <AdminInput
            label="name"
            value={nameValue}
            onChange={handleNameChange}
          />
        </div>
        <AdminSubmitButtonBar
          handleCreate={handleCreate}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />
      </div>
      <Toaster />
    </div>
  );
}

FormatForm.defaultProps = {
  currentDatum: {}
};

export default FormatForm;
