import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import {
  callCreateLongMessage,
  callDeleteLongMessage,
  callUpdateLongMessage
} from '../../../../redux/thunks/longMessage';
import { longMessageValidator } from '../../../../redux/validators';
import AdminInput from '../../AdminInput';
import AdminSubmitButtonBar from '../../AdminSubmitButtonBar';
import { NTBox, NTColumn } from '../../../../components/layoutComponents';
import { NTTitle } from '../../../../components/styledComponents';

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
    dispatch(callDeleteLongMessage({ id: currentDatum.id }));
  }
  return (
    <NTBox style={{ display: 'flex' }}>
      <NTColumn>
        <NTTitle>{`Edit ${title}`}</NTTitle>
        <NTColumn>
          <AdminInput
            label="text"
            value={textValue}
            onChange={handleTextChange}
          />
        </NTColumn>
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
