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
import AdminSelect from '../../AdminSelect';
import AdminDatePicker from '../../AdminDatePicker';
import AdminTimePicker from '../../AdminTimePicker';
import {
  NTBox,
  NTColumn,
  NTRow
} from '../../../../components/layoutComponents';
import { NTTitle } from '../../../../components/styledComponents';

function ScheduledTrainForm(props) {
  const { title, currentDatum, youTubeResources } = props;
  const dispatch = useDispatch();
  const stations = useSelector((state) => state.train.stations);
  const activities = useSelector((state) => state.train.activities);
  const formats = useSelector((state) => state.train.formats);
  const scheduledActivities = useSelector(
    (state) => state.train.scheduledActivities
  );
  const [dateValue, setDateValue] = useState(currentDatum.train_time);
  const [timeValue, setTimeValue] = useState(currentDatum.train_time);
  const [groundTagValue, setGroundTagValue] = useState(currentDatum.groundTag);
  const [standingTagValue, setStandingTagValue] = useState(
    currentDatum.standingTag
  );
  const [descriptionValue, setDescriptionValue] = useState(
    currentDatum.description
  );
  const [statusValue, setStatusValue] = useState(currentDatum.status);
  const [stationOption, setStationOption] = useState(
    createOption(stations[0], 'name')
  );

  useEffect(() => {
    setDescriptionValue(currentDatum.description);
    setStationOption(
      getCurrentOption(stations, currentDatum.stationID, 'name')
    );
    setDateValue(currentDatum.train_date);
    setTimeValue(currentDatum.train_time);
  }, [title, currentDatum]);

  function handleDescriptionChange(event) {
    setDescriptionValue(event.target.value);
  }

  function handleGroundTagChange(event) {
    setGroundTagValue(event.target.value);
  }

  function handleStandingTagChange(event) {
    setStandingTagValue(event.target.value);
  }

  function handleStatusChange(event) {
    setStatusValue(event.target.value);
  }

  function handleStationSelect(item) {
    setStationOption(item);
  }

  function handleDateChange(event) {
    setDateValue(event);
  }

  function handleTimeChange(event) {
    setTimeValue(event);
  }

  function handleUpdate() {
    const updatedScheduledTrain = {
      description: descriptionValue,
      train_date: dateValue,
      train_time: timeValue,
      stationID: stationOption.value,
      standingTag: standingTagValue,
      groundTag: groundTagValue,
      status: statusValue,
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
      train_date: dateValue,
      train_time: timeValue,
      standingTag: standingTagValue,
      groundTag: groundTagValue,
      status: statusValue,
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
    <NTBox>
      <NTTitle>{`Edit ${title}`}</NTTitle>
      <NTRow>
        <NTColumn>
          <div
            style={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <AdminDatePicker value={dateValue} onChange={handleDateChange} />
            <AdminTimePicker value={timeValue} onChange={handleTimeChange} />
            <AdminInput
              label="status"
              value={statusValue}
              onChange={handleStatusChange}
            />
            <AdminInput
              label="description"
              value={descriptionValue}
              onChange={handleDescriptionChange}
            />
            <AdminSelect
              label="station"
              options={stations.map((s) => createOption(s, 'name'))}
              value={stationOption}
              onChange={handleStationSelect}
            />
            <AdminInput
              label="standing tag"
              value={standingTagValue}
              onChange={handleStandingTagChange}
            />
            <AdminInput
              label="ground tag"
              value={groundTagValue}
              onChange={handleGroundTagChange}
            />
          </div>
          <AdminSubmitButtonBar
            handleCreate={handleCreate}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        </NTColumn>
        <NTColumn />
      </NTRow>
      <Toaster />
    </NTBox>
  );
}

ScheduledTrainForm.defaultProps = {
  currentDatum: {}
};

export default ScheduledTrainForm;
