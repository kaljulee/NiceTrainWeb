import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import {
  callCreateYouTubeResource,
  callDeleteYouTubeResource,
  callUpdateYouTubeResource
} from '../../../../redux/thunks/youTubeResource';
import { youTubeResourceValidator } from '../../../../redux/validators';
import AdminInput from '../../AdminInput';
import AdminSubmitButtonBar from '../../AdminSubmitButtonBar';

function YouTubeResourceForm(props) {
  const { title, currentDatum } = props;
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
  }

  function handleDelete() {
    dispatch(callDeleteYouTubeResource({ id: currentDatum.id }));
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

YouTubeResourceForm.defaultProps = {
  currentDatum: {}
};

export default YouTubeResourceForm;
