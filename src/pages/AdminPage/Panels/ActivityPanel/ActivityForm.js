import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import {
  callCreateActivity,
  callDeleteActivity,
  callUpdateActivity
} from '../../../../redux/thunks/activity';
import { activityValidator } from '../../../../redux/validators';
import AdminInput from '../../../../components/Admin/AdminInput';
import AdminSubmitButtonBar from '../../../../components/Admin/AdminSubmitButtonBar';
import { createOption, getCurrentOption } from '../../../../utils';
import AdminSelect from '../../../../components/Admin/AdminSelect';
import { NTBox, NTColumn } from '../../../../components/layoutComponents';

function ActivityForm(props) {
  const { title, currentDatum, youTubeResources, clearCurrentDatum } = props;
  const dispatch = useDispatch();
  const [nameValue, setNameValue] = useState(currentDatum.name);
  const [descriptionValue, setDescriptionValue] = useState(
    currentDatum.description
  );
  const [ytrOption, setYTROption] = useState(
    getCurrentOption(
      youTubeResources,
      currentDatum.youTubeResourceID,
      'description'
    )
  );

  useEffect(() => {
    setNameValue(currentDatum.name);
    setDescriptionValue(currentDatum.description);
    setYTROption(
      getCurrentOption(
        youTubeResources,
        currentDatum.youTubeResourceID,
        'description'
      )
    );
  }, [title, currentDatum]);

  function handleNameChange(event) {
    setNameValue(event.target.value);
    console.table(currentDatum);
  }

  function handleDescriptionChange(event) {
    setDescriptionValue(event.target.value);
    console.table(currentDatum);
  }

  function handleYTRSelect(item) {
    setYTROption(item);
    console.table(currentDatum);
  }

  function handleUpdate() {
    const updatedActivity = {
      name: nameValue,
      description: descriptionValue,
      id: currentDatum.id
    };
    if (ytrOption) {
      updatedActivity.youTubeResourceID = ytrOption.value;
    }
    const activityValidation = activityValidator(updatedActivity);
    if (!activityValidation.isOk) {
      toast.error(activityValidation.error);
      return;
    }
    dispatch(callUpdateActivity(updatedActivity));
  }

  function handleCreate() {
    const newActivity = {
      name: nameValue,
      description: descriptionValue,
      youTubeResourceID: ytrOption.value
    };
    const activityValidation = activityValidator(newActivity);
    if (!activityValidation.isOk) {
      toast.error(activityValidation.error);
      return;
    }
    dispatch(callCreateActivity(newActivity));
    clearCurrentDatum();
  }

  function handleDelete() {
    dispatch(callDeleteActivity({ id: currentDatum.id }));
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
        <AdminInput
          label="description"
          value={descriptionValue}
          onChange={handleDescriptionChange}
        />
        <AdminSelect
          label="youTube resource"
          options={youTubeResources.map((ytr) =>
            createOption(ytr, 'description')
          )}
          value={ytrOption}
          onChange={handleYTRSelect}
        />
        <AdminSubmitButtonBar
          hasCurrentDatum={!!currentDatum.id}
          clearCurrentDatum={clearCurrentDatum}
          handleCreate={handleCreate}
          handleDelete={handleDelete}
        />
      </NTColumn>
      <Toaster />
    </NTBox>
  );
}

ActivityForm.defaultProps = {
  currentDatum: {}
};

export default ActivityForm;
