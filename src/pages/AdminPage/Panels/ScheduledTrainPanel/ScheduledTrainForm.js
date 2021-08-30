import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import styled from '@emotion/styled';
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
import { callGetScheduledActivitiesByTrain } from '../../../../redux/thunks/scheduledActivity';
import { mq5 } from '../../../../styles/breakpoints';

const ListColumn = styled(NTColumn)`
  ${mq5({ display: ['none', 'none', 'none', 'flex', 'flex'] })}
`;

function ScheduledTrainForm(props) {
  // todo currentDatum and clearCurrentDatum comes from AdminPanel
  const { title, currentDatum, youTubeResources, clearCurrentDatum } = props;
  const dispatch = useDispatch();
  const stations = useSelector((state) => state.train.stations);
  const activities = useSelector((state) => state.train.activities);
  const formats = useSelector((state) => state.train.formats);
  const allSActivities = useSelector(
    (state) => state.train.scheduledActivities
  );
  const [scheduledActivities, setScheduledActivities] = useState([]);
  const [isPanelOpen, _setIsPanelOpen] = useState(false);
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

  useEffect(() => {
    const selectedActivities = allSActivities[currentDatum.id];
    if (!selectedActivities) {
      dispatch(callGetScheduledActivitiesByTrain(currentDatum.id));
      return;
    }
    setScheduledActivities(selectedActivities);
  }, [currentDatum, allSActivities]);

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
    clearCurrentDatum();
  }

  function handleDelete() {
    dispatch(callDeleteScheduledTrain({ id: currentDatum.id }));
    clearCurrentDatum();
  }

  function handlePanelToggle() {
    if (!currentDatum || !currentDatum.id) {
      toast.error('No train selected');
      _setIsPanelOpen(false);
      return;
    }
    _setIsPanelOpen(!isPanelOpen);
  }

  function closePanel() {
    _setIsPanelOpen(false);
  }

  return (
    <NTBox>
      <NTRow>
        <NTColumn>
          <NTRow>
            <NTButton
              style={{ alignSelf: 'flex-end' }}
              onClick={handlePanelToggle}
            >
              edit activities
            </NTButton>
          </NTRow>
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
                hasCurrentDatum={!!currentDatum.id}
                clearCurrentDatum={clearCurrentDatum}
              />
            </NTColumn>
          </NTRow>
        </NTColumn>
        <ListColumn>
          <AdminList
            title="Activities"
            data={scheduledActivities}
            fields={['name']}
            onDatumClick={() => {}}
          />
        </ListColumn>
      </NTRow>
      <ScheduledActivityPanel
        isOpen={isPanelOpen}
        scheduledTrainID={currentDatum ? currentDatum.id : undefined}
        requestClose={() => {
          closePanel();
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
