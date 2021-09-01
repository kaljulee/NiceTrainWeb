import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import {
  callCreateYouTubeResource,
  callDeleteYouTubeResource,
  callUpdateYouTubeResource
} from '../../../../redux/thunks/youTubeResource';
import { youTubeResourceValidator } from '../../../../redux/validators';
import AdminInput from '../../../../components/Admin/AdminInput';
import AdminSubmitButtonBar from '../../../../components/Admin/AdminSubmitButtonBar';
import { NTBox, NTColumn } from '../../../../components/layoutComponents';

function YouTubeResourceForm(props) {
  const { title, currentDatum, clearCurrentDatum } = props;
  const dispatch = useDispatch();
  const [descriptionValue, setDescriptionValue] = useState(
    currentDatum.description
  );
  const [linkValue, setLinkValue] = useState(currentDatum.link);
  const [authorValue, setAuthorValue] = useState(currentDatum.author);

  useEffect(() => {
    setDescriptionValue(currentDatum.description);
    setLinkValue(currentDatum.link);
    setAuthorValue(currentDatum.author);
  }, [title, currentDatum]);

  function handleDescriptionChange(event) {
    setDescriptionValue(event.target.value);
  }

  function handleLinkChange(event) {
    setLinkValue(event.target.value);
  }

  function handleAuthorChange(event) {
    setAuthorValue(event.target.value);
  }

  function handleUpdate() {
    const updatedYTR = {
      description: descriptionValue,
      link: linkValue,
      author: authorValue,
      id: currentDatum.id
    };
    const ytrValidation = youTubeResourceValidator(updatedYTR);
    if (!ytrValidation.isOk) {
      toast.error(ytrValidation.error);
      return;
    }
    dispatch(callUpdateYouTubeResource(updatedYTR));
  }

  function handleCreate() {
    const newYTR = {
      description: descriptionValue,
      link: linkValue,
      author: authorValue
    };
    const ytrValidation = youTubeResourceValidator(newYTR);
    if (!ytrValidation.isOk) {
      toast.error(ytrValidation.error);
      return;
    }
    dispatch(callCreateYouTubeResource(newYTR));
    clearCurrentDatum();
  }

  function handleDelete() {
    dispatch(callDeleteYouTubeResource({ id: currentDatum.id }));
    clearCurrentDatum();
  }
  return (
    <NTBox>
      <NTColumn>
        <NTColumn>
          <AdminInput
            label="description"
            value={descriptionValue}
            onChange={handleDescriptionChange}
          />
          <AdminInput
            label="author"
            value={authorValue}
            onChange={handleAuthorChange}
          />
          <AdminInput
            label="link"
            value={linkValue}
            onChange={handleLinkChange}
          />
        </NTColumn>
        <AdminSubmitButtonBar
          handleCreate={handleCreate}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
          hasCurrentDatum={!!currentDatum.id}
          clearCurrentDatum={clearCurrentDatum}
        />
      </NTColumn>
      <Toaster />
    </NTBox>
  );
}

YouTubeResourceForm.defaultProps = {
  currentDatum: {}
};

export default YouTubeResourceForm;
