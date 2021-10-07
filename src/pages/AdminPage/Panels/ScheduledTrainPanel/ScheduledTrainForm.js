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
import AdminInput from '../../../../components/Admin/AdminInput';
import AdminSubmitButtonBar from '../../../../components/Admin/AdminSubmitButtonBar';
import { createOption, getCurrentOption } from '../../../../utils';
import AdminSelect from '../../../../components/Admin/AdminSelect';
import AdminDatePicker from '../../../../components/Admin/AdminDatePicker';
import AdminTimePicker from '../../../../components/Admin/AdminTimePicker';
import {
  NTBox,
  NTColumn,
  NTRow
} from '../../../../components/layoutComponents';
import { NTButton, NTLabel } from '../../../../components/styledComponents';
import AdminList from '../../../../components/Admin/AdminList';
import ScheduledActivityPanel from '../../../../components/TrainPamphlet/ScheduledActivityEditorPamphlet';
import { callGetScheduledActivitiesByTrain } from '../../../../redux/thunks/scheduledActivity';
import { mq5 } from '../../../../styles/breakpoints';
import { STATUS_OPTIONS } from '../../../../constants';
import { adminUpdator } from '../../../../redux/thunks';

const ListColumn = styled(NTColumn)`
  ${mq5({ display: ['none', 'none', 'none', 'flex', 'flex'] })}
`;

function ScheduledTrainForm(props) {
  // todo currentDatum and clearCurrentDatum comes from AdminPanel
  const { title, currentDatum, clearCurrentDatum } = props;
  const dispatch = useDispatch();
  const stations = useSelector((state) => state.train.stations);
  // const activities = useSelector((state) => state.train.activities);
  // const formats = useSelector((state) => state.train.formats);
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
  const [statusOption, setStatusOption] = useState(
    STATUS_OPTIONS.find((s) => s.value === currentDatum.status)
  );
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
    setStatusOption(
      STATUS_OPTIONS.find((o) => o.value === currentDatum.status)
    );
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

  function saveInput(newData) {
    console.log('new data being saved in saveInput');
    console.table(newData);
    adminUpdator(
      newData,
      currentDatum.id,
      (d) => dispatch(callUpdateScheduledTrain(d)),
      scheduledTrainValidator,
      (m) => toast.error(m)
    );
    // const updatedScheduledTrain = {
    //   description: descriptionValue,
    //   train_date: dateValue,
    //   train_time: timeValue,
    //   stationID: stationOption.value,
    //   standingTag: standingTagValue,
    //   groundTag: groundTagValue,
    //   status: statusOption.value,
    //   id: currentDatum.id
    // };
    // const scheduledTrainValidation = scheduledTrainValidator(
    //   updatedScheduledTrain
    // );
    // if (!scheduledTrainValidation.isOk) {
    //   toast.error(scheduledTrainValidation.error);
    //   return;
    // }
    // dispatch(callUpdateScheduledTrain(updatedScheduledTrain));
  }

  function handleDescriptionChange(event) {
    setDescriptionValue(event.target.value);
  }

  function handleGroundTagChange(event) {
    setGroundTagValue(event.target.value);
  }

  function handleStandingTagChange(event) {
    setStandingTagValue(event.target.value);
  }

  function handleStatusSelect(item) {
    setStatusOption(item);
    saveInput({ status: item.value });
  }

  function handleStationSelect(item) {
    setStationOption(item);
    saveInput({ stationID: item.value });
  }

  function handleDateChange(event) {
    setDateValue(event);
  }

  function handleTimeChange(event) {
    setTimeValue(event);
  }

  function handleCreate() {
    const newScheduledTrain = {
      description: descriptionValue,
      train_date: dateValue,
      train_time: timeValue,
      standingTag: standingTagValue,
      groundTag: groundTagValue,
      status: statusOption.value,
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
                    onBlur={() => {
                      saveInput({ train_date: dateValue });
                    }}
                    value={dateValue}
                    onChange={handleDateChange}
                  />
                </NTColumn>
                <NTColumn>
                  <NTLabel>time</NTLabel>
                  <AdminTimePicker
                    onBlur={() => {
                      saveInput({ train_time: timeValue });
                    }}
                    value={timeValue}
                    onChange={handleTimeChange}
                  />
                </NTColumn>
              </NTRow>
              <AdminSelect
                label="status"
                value={statusOption}
                onChange={handleStatusSelect}
                options={STATUS_OPTIONS}
              />
              <AdminInput
                label="description"
                value={descriptionValue}
                onChange={handleDescriptionChange}
                onBlur={() => {
                  saveInput({ description: descriptionValue });
                }}
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
                onBlur={() => {
                  saveInput({ standingTag: standingTagValue });
                }}
              />
              <AdminInput
                label="ground tag"
                value={groundTagValue}
                onChange={handleGroundTagChange}
                onBlur={() => {
                  saveInput({ groundTag: groundTagValue });
                }}
              />
              <AdminSubmitButtonBar
                handleCreate={handleCreate}
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
