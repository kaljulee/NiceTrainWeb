import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import toast, { Toaster } from 'react-hot-toast';
import {
  callCreateScheduledTrain,
  callDeleteScheduledTrain,
  callUpdateScheduledTrain
} from '../../../../redux/thunks/scheduledTrain';
import { scheduledTrainValidator } from '../../../../redux/validators';
import AdminInput from '../../AdminInput';
import AdminSubmitButtonBar from '../../AdminSubmitButtonBar';
import { createOption, getCurrentOption } from '../../../../utils';
import ActivityForm from '../ActivityPanel/ActivityForm';
import AdminSelect from '../../AdminSelect';

function ScheduledTrainForm(props) {
  const { title, currentDatum, youTubeResources } = props;
  const dispatch = useDispatch();
  const stations = useSelector((state) => state.stations);
  const [nameValue, setNameValue] = useState(currentDatum.name);
  const [timeValue, setTimeValue] = useState(currentDatum.train_time);
  const [dateValue, setDateValue] = useState(currentDatum.train_date);
  const [descriptionValue, setDescriptionValue] = useState(
    currentDatum.description
  );
  const [stationOption, setStationOption] = useState(createOption(stations[0]));

  useEffect(() => {
    setNameValue(currentDatum.name);
    setDescriptionValue(currentDatum.description);
    setStationOption(getCurrentOption(stations, currentDatum.stationID));
  }, [title, currentDatum]);

  function handleNameChange(event) {
    setNameValue(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescriptionValue(event.target.value);
  }

  function handleStationSelect(item) {
    setStationOption(item);
  }

  function handleTimeChange(event) {
    console.log('handleTimeChange');
    console.log(event);
  }

  function handleDateChange(event) {
    console.log('handleDateChange');
    console.log(event);
  }

  function handleUpdate() {
    const updatedScheduledTrain = {
      name: nameValue,
      description: descriptionValue,
      train_time: timeValue,
      train_date: dateValue,
      stationID: stationOption.value,
      id: currentDatum.id
    };
    const scheduledTrainValidation = scheduledTrainValidator(
      updatedScheduledTrain
    );
    if (!scheduledTrainValidation.isOk) {
      toast.error(scheduledTrainValidation.error);
      return;
    }
    dispatch(callUpdateScheduledTrain(updatedScheduledTrain));
  }

  function handleCreate() {
    const newScheduledTrain = {
      name: nameValue,
      description: descriptionValue,
      stationID: stationOption.value
    };
    const scheduledTrainValidation = scheduledTrainValidator(newScheduledTrain);
    if (!scheduledTrainValidation.isOk) {
      toast.error(scheduledTrainValidation.error);
      return;
    }
    dispatch(callCreateScheduledTrain(newScheduledTrain));
  }

  function handleDelete() {
    dispatch(callDeleteScheduledTrain({ id: currentDatum.id }));
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
          <AdminInput
            label="description"
            value={descriptionValue}
            onChange={handleDescriptionChange}
          />
          <div>
            <AdminSelect
              label="station"
              options={stations.map((s) => createOption(s))}
              currentOption={stationOption}
              onChange={handleStationSelect}
            />
          </div>
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

ScheduledTrainForm.defaultProps = {
  currentDatum: {}
};

export default ScheduledTrainForm;
