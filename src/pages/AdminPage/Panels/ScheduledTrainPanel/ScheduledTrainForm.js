import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import toast, { Toaster } from 'react-hot-toast';
import DateTimePicker from 'react-datetime-picker';
import {
  callCreateScheduledTrain,
  callDeleteScheduledTrain,
  callUpdateScheduledTrain
} from '../../../../redux/thunks/scheduledTrain';
import { scheduledTrainValidator } from '../../../../redux/validators';
import AdminInput from '../../AdminInput';
import AdminSubmitButtonBar from '../../AdminSubmitButtonBar';
import { createOption, getCurrentOption } from '../../../../utils';
import AdminSelect from '../../AdminSelect';

function ScheduledTrainForm(props) {
  const { title, currentDatum, youTubeResources } = props;
  const dispatch = useDispatch();
  const stations = useSelector((state) => state.stations);
  const activities = useSelector((state) => state.activities);
  const [dateTimeValue, setDateTimeValue] = useState(
    Date(currentDatum.train_date_time)
  );
  const [descriptionValue, setDescriptionValue] = useState(
    currentDatum.description
  );
  const [stationOption, setStationOption] = useState(createOption(stations[0]));

  useEffect(() => {
    setDescriptionValue(currentDatum.description);
    setStationOption(getCurrentOption(stations, currentDatum.stationID));
    setDateTimeValue(Date(currentDatum.train_date_time));
  }, [title, currentDatum]);

  function handleDescriptionChange(event) {
    setDescriptionValue(event.target.value);
  }

  function handleStationSelect(item) {
    setStationOption(item);
  }

  function handleDateTimeChange(event) {
    console.log('date time change');
    console.log(event);
    setDateTimeValue(Date(event));
  }

  function handleUpdate() {
    const updatedScheduledTrain = {
      description: descriptionValue,
      train_date_time: dateTimeValue,
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
      description: descriptionValue,
      train_date_time: dateTimeValue,
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
          <div style={{ width: '100%', height: '100%' }}>
            <span style={{ color: 'goldenrod' }}>date and time</span>
            <div style={{ backgroundColor: 'white', width: 'max-content' }}>
              <DateTimePicker
                value={dateTimeValue}
                onChange={handleDateTimeChange}
              />
            </div>
          </div>
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
