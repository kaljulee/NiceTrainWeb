import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import {
  callCreateLongMessage,
  callDeleteLongMessage,
  callUpdateLongMessage
} from '../../../../redux/thunks/longMessage';
import { longMessageValidator } from '../../../../redux/validators';
import AdminInput from '../../components/AdminInput';
import AdminSubmitButtonBar from '../../components/AdminSubmitButtonBar';
import { NTBox, NTColumn } from '../../../../components/layoutComponents';

function LongMessageForm(props) {
  const { title, currentDatum } = props;
  const dispatch = useDispatch();
  const [textValue, setTextValue] = useState(currentDatum.text);

  useEffect(() => {
    setTextValue(currentDatum.text);
  }, [title, currentDatum]);

  function handleTextChange(event) {
    setTextValue(event.target.value);
  }

  function handleUpdate() {
    const updatedLongMessage = {
      text: textValue,
      id: currentDatum.id
    };
    const longMessageValidation = longMessageValidator(updatedLongMessage);
    if (!longMessageValidation.isOk) {
      toast.error(longMessageValidation.error);
      return;
    }
    dispatch(callUpdateLongMessage(updatedLongMessage));
  }

  function handleCreate() {
    const newLongMessage = { text: textValue };
    const longMessageValidation = longMessageValidator(newLongMessage);
    if (!longMessageValidation.isOk) {
      toast.error(longMessageValidation.error);
      return;
    }
    dispatch(callCreateLongMessage(newLongMessage));
  }

  function handleDelete() {
    console.log('trying to delete');
    console.log(`id is ${currentDatum.id}`);
    dispatch(callDeleteLongMessage({ id: currentDatum.id }));
  }
  return (
    <NTBox>
      <NTColumn>
        <AdminInput
          label="text"
          value={textValue}
          onChange={handleTextChange}
        />
        <AdminSubmitButtonBar
          handleCreate={handleCreate}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />
      </NTColumn>
      <Toaster />
    </NTBox>
  );
}

LongMessageForm.defaultProps = { currentDatum: {} };

export default LongMessageForm;
