import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import {
  callCreateYouTubeResource,
  callDeleteYouTubeResource,
  callUpdateYouTubeResource,
} from '../../../../redux/thunks/youTubeResource';
import { youTubeResourceValidator } from '../../../../redux/validators';
import AdminInput from '../../../../components/Admin_Old/AdminInput';
import AdminSubmitButtonBar from '../../../../components/Admin_Old/AdminSubmitButtonBar';
import { NTBox, NTColumn } from '../../../../components/layoutComponents';
import { adminUpdator } from '../../../../redux/thunks';

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

  // todo is this really better?
  function saveInput(newData) {
    adminUpdator(
      newData,
      currentDatum.id,
      (d) => dispatch(callUpdateYouTubeResource(d)),
      youTubeResourceValidator,
      (m) => toast.error(m)
    );
  }

  function handleCreate() {
    const newYTR = {
      description: descriptionValue,
      link: linkValue,
      author: authorValue,
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
            label='description'
            value={descriptionValue}
            onChange={handleDescriptionChange}
            onBlur={() => {
              saveInput({ description: descriptionValue });
            }}
          />
          <AdminInput
            label='author'
            value={authorValue}
            onChange={handleAuthorChange}
            onBlur={() => {
              saveInput({ author: authorValue });
            }}
          />
          <AdminInput
            label='link'
            value={linkValue}
            onChange={handleLinkChange}
            onBlur={() => {
              saveInput({ link: linkValue });
            }}
          />
        </NTColumn>
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

YouTubeResourceForm.defaultProps = {
  currentDatum: {},
};

export default YouTubeResourceForm;
