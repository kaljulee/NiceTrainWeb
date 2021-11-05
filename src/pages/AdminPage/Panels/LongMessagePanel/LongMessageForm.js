import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import {
  callCreateLongMessage,
  callDeleteLongMessage,
  callUpdateLongMessage
} from '../../../../redux/thunks/longMessage';
import { longMessageValidator } from '../../../../redux/validators';
import AdminInput from '../../../../components/Admin_Old/AdminInput';
import AdminSubmitButtonBar from '../../../../components/Admin_Old/AdminSubmitButtonBar';
import { NTBox, NTColumn } from '../../../../components/layoutComponents';
import { adminUpdator } from '../../../../redux/thunks';

function LongMessageForm(props) {
  const { title, currentDatum, clearCurrentDatum } = props;
  const dispatch = useDispatch();
  const [textValue, setTextValue] = useState(currentDatum.text);

  useEffect(() => {
    setTextValue(currentDatum.text);
  }, [title, currentDatum]);

  function handleTextChange(event) {
    setTextValue(event.target.value);
  }

  function saveInput(newData) {
    adminUpdator(
      newData,
      currentDatum.id,
      (d) => dispatch(callUpdateLongMessage(d)),
      longMessageValidator,
      (m) => toast.error(m)
    );
    // const updatedLongMessage = {
    //   text: textValue,
    //   id: currentDatum.id
    // };
    // const longMessageValidation = longMessageValidator(updatedLongMessage);
    // if (!longMessageValidation.isOk) {
    //   toast.error(longMessageValidation.error);
    //   return;
    // }
    // dispatch(callUpdateLongMessage(updatedLongMessage));
  }

  function handleCreate() {
    const newLongMessage = { text: textValue };
    const longMessageValidation = longMessageValidator(newLongMessage);
    if (!longMessageValidation.isOk) {
      toast.error(longMessageValidation.error);
      return;
    }
    dispatch(callCreateLongMessage(newLongMessage));
    clearCurrentDatum();
  }

  function handleDelete() {
    dispatch(callDeleteLongMessage({ id: currentDatum.id }));
    clearCurrentDatum();
  }
  return (
    <NTBox style={{ marginBottom: '5vh' }}>
      <NTColumn>
        <AdminInput
          label="text"
          value={textValue}
          onChange={handleTextChange}
          onBlur={() => {
            saveInput({ text: textValue });
          }}
        />
        <AdminSubmitButtonBar
          handleCreate={handleCreate}
          handleDelete={handleDelete}
          hasCurrentDatum={!!currentDatum.id}
          clearCurrentDatum={clearCurrentDatum}
        />
      </NTColumn>
      <Toaster />
    </NTBox>
  );
}

LongMessageForm.defaultProps = { currentDatum: {} };

export default LongMessageForm;
