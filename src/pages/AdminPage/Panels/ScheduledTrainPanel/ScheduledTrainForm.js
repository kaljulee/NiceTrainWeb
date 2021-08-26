import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import {
  callCreateScheduledTrain,
  callDeleteScheduledTrain,
  callUpdateScheduledTrain
} from '../../../../redux/thunks/scheduledTrain';
import { scheduledTrainValidator } from '../../../../redux/validators';
import AdminInput from '../../components/AdminInput';
import AdminSubmitButtonBar from '../../components/AdminSubmitButtonBar';
import { createOption, getCurrentOption } from '../../../../utils';
import AdminSelect from '../../components/AdminSelect';
import AdminDatePicker from '../../components/AdminDatePicker';
import AdminTimePicker from '../../components/AdminTimePicker';
import {
  NTBox,
  NTColumn,
  NTRow
} from '../../../../components/layoutComponents';
import { NTButton, NTLabel } from '../../../../components/styledComponents';
import AdminList from '../../components/AdminList';
import ScheduledActivityPanel from '../ScheduledActivityPanel';

function ScheduledTrainForm(props) {
  const { title, currentDatum, youTubeResources, scheduledActivities } = props;
  console.log('STF SA');
  console.log(scheduledActivities);
  const dispatch = useDispatch();
  const stations = useSelector((state) => state.train.stations);
  const activities = useSelector((state) => state.train.activities);
  const formats = useSelector((state) => state.train.formats);

  const [isPanelOpen, setIsPanelOpen] = useState(false);
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
    setStandingTagValue(currentDatum.standingTag);
    setGroundTagValue(currentDatum.groundTag);
    setStatusValue(currentDatum.status);
    setDescriptionValue(currentDatum.description);
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
    console.log('dispatching st update');
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

  function handlePanelToggle() {
    if (!isPanelOpen) {
      if (!currentDatum) {
        toast.error('No train selected');
        return;
      }
    }
    setIsPanelOpen(!isPanelOpen);
  }

  return (
    <NTBox>
      <NTRow>
        <NTColumn>
          <NTRow>
            <NTColumn>
              <NTRow style={{ justifyContent: 'space-around' }}>
                <NTColumn>
                  <NTLabel>date</NTLabel>
                  <AdminDatePicker
                    value={dateValue}
                    onChange={handleDateChange}
                  />
                </NTColumn>
                <NTColumn>
                  <NTLabel>time</NTLabel>
                  <AdminTimePicker
                    value={timeValue}
                    onChange={handleTimeChange}
                  />
                </NTColumn>
              </NTRow>
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
              <AdminSubmitButtonBar
                handleCreate={handleCreate}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
              />
            </NTColumn>
          </NTRow>
        </NTColumn>
        <NTColumn>
          <AdminList
            title="Activities"
            data={scheduledActivities}
            fields={['name']}
            onDatumClick={() => {}}
          />
          <NTButton onClick={handlePanelToggle}>edit activities</NTButton>
        </NTColumn>
      </NTRow>
      <ScheduledActivityPanel
        isOpen={isPanelOpen}
        scheduledTrainID={currentDatum ? currentDatum.id : undefined}
        requestClose={() => {
          setIsPanelOpen(false);
        }}
        scheduledActivities={scheduledActivities}
      />
      <Toaster />
    </NTBox>
  );
}

ScheduledTrainForm.defaultProps = {
  currentDatum: {}
};

export default ScheduledTrainForm;
