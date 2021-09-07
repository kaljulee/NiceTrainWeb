import React, { useEffect, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';
import { Toaster, toast } from 'react-hot-toast';
import { useTheme } from '@emotion/react';
import { NTBox, NTColumn, NTRow } from '../../layoutComponents';
import AdminSelect from '../../Admin/AdminSelect';
import {
  createOption,
  getCurrentOption,
  hmsToDisplay,
  hmsToSeconds,
  secondsToHMS
} from '../../../utils';
import {
  callDeleteScheduledActivity,
  callUpdateScheduledActivity
} from '../../../redux/thunks/scheduledActivity';
import { mq5 } from '../../../styles/breakpoints';
import {
  PamphletDurationButton,
  PamphletInput,
  PamphletLabel
} from '../trainPamphlet';
import DurationModal from '../DurationModal';

function customStyler(theme) {
  return {
    option: (provided) => ({
      ...provided,
      color: theme.onBackground,
      backgroundColor: theme.background
    }),
    singleValue: (provided) => ({
      background: theme.background,
      color: theme.onBackground
      // whiteSpace: 'nowrap'
    }),
    container: (provided) => ({
      ...provided,
      color: theme.onBackground,
      backgroundColor: theme.background,
      width: 'inherit'
    }),
    input: (provided) => ({
      ...provided,
      color: theme.onBackground,
      backgroundColor: theme.background,
      display: 'none'
    }),
    control: (provided, selectState) => ({
      ...provided,
      color: theme.onBackground,
      boxShadow: 0,
      backgroundColor: theme.background,
      border: selectState.isFocused ? '' : 'none',
      borderColor: selectState.isFocused ? theme.accent : 'none', // theme.secondarySurface,
      '&:hover': {
        borderColor: theme.accent
      }
    }),
    indicatorSelector: (provided) => ({
      ...provided,
      color: theme.onBackground
    }),
    valueContainer: (provided) => ({
      ...provided,
      color: theme.onBackground,
      backgroundColor: theme.background
    }),
    indicatorContainer: (provided) => ({
      ...provided,
      color: theme.onBackground,
      backgroundColor: theme.background
    }),
    menu: (provided) => ({
      ...provided,
      color: theme.onBackground,
      backgroundColor: theme.background
    })
  };
}

const ActivityRow = styled(NTRow)`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  padding: 2px 0 5px 0;
  ${mq5({ flexDirection: ['column', 'column', 'row', 'row', 'row'] })};
`;

const SaveButton = styled.button`
  background: ${(props) => props.theme.primarySurface};
  color: ${(props) => props.theme.onPrimarySurface};
  height: 100%;
`;

const DeleteButton = styled(SaveButton)`
  background: ${(props) => props.theme.onPrimarySurface};
  color: ${(props) => props.theme.primarySurface};
`;

function DragItem(props) {
  const { activity, openDurationModal, closeDurationModal } = props;
  const possibleActivities = useSelector((state) => state.train.activities);
  const possibleFormats = useSelector((state) => state.train.formats);
  const [currentActivityOption, setCurrentActivityOption] = useState(
    getCurrentOption(possibleActivities, activity.activityID, 'description')
  );
  const [currentFormatOption, setCurrentFormatOption] = useState(
    getCurrentOption(possibleFormats, activity.formatID, 'name')
  );
  const [hmsValue, setHMSValue] = useState(
    Number.isNaN(activity.duration)
      ? { h: 0, m: 0, s: 0 }
      : secondsToHMS(activity.duration)
  );
  const [nameValue, setNameValue] = useState(activity.name);

  useEffect(() => {
    setHMSValue(
      Number.isNaN(activity.duration)
        ? { h: 0, m: 0, s: 0 }
        : secondsToHMS(activity.duration)
    );
    setNameValue(activity.name);
  }, [activity]);

  const dispatch = useDispatch();

  const theme = useTheme();
  const customStyles = customStyler(theme);

  function onDurationChange(arg) {
    let goodInput = true;
    Object.keys(arg).forEach((k) => {
      if (isNaN(arg[k])) {
        goodInput = false;
        toast.error('must be a number');
      }
    });
    if (goodInput) {
      setHMSValue({ ...hmsValue, ...arg });
    }
  }

  function saveChanges() {
    const sActivityUpdate = {
      id: activity.id,
      name: nameValue,
      duration: hmsToSeconds(hmsValue)
    };
    if (currentActivityOption && currentActivityOption.value) {
      sActivityUpdate.activityID = currentActivityOption.value;
    }
    if (currentFormatOption && currentFormatOption.value) {
      sActivityUpdate.formatID = currentFormatOption.value;
    }
    dispatch(callUpdateScheduledActivity(sActivityUpdate));
  }

  function deleteScheduledActivity() {
    dispatch(callDeleteScheduledActivity({ id: activity.id }));
  }
  const activtyOptions = possibleActivities.map((a) => createOption(a, 'name'));
  const formatOptions = possibleFormats.map((f) => createOption(f, 'name'));
  return (
    <Draggable draggableId={activity.id} index={activity.order}>
      {(provided) => (
        <ActivityRow
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <NTColumn $flex={2}>
            <PamphletLabel>Name</PamphletLabel>
            <PamphletInput
              value={nameValue}
              onChange={(event) => setNameValue(event.target.value)}
            />
          </NTColumn>
          <NTColumn $flex={3} style={{ justifyContent: 'flex-start' }}>
            <PamphletLabel>Activity</PamphletLabel>
            <AdminSelect
              customStyles={customStyles}
              options={activtyOptions}
              value={currentActivityOption}
              onChange={setCurrentActivityOption}
            />
          </NTColumn>
          <NTColumn $flex={3}>
            <PamphletLabel>Format</PamphletLabel>
            <AdminSelect
              customStyles={customStyles}
              options={formatOptions}
              value={currentFormatOption}
              onChange={setCurrentFormatOption}
            />
          </NTColumn>
          <NTColumn $flex={2}>
            <PamphletLabel>Duration</PamphletLabel>
            <PamphletDurationButton
              onClick={() => openDurationModal(activity.id)}
            >
              {hmsToDisplay(hmsValue)}
            </PamphletDurationButton>
          </NTColumn>
          <NTColumn $flex={1} style={{ justifyContent: 'space-around' }}>
            <SaveButton type="submit" onClick={saveChanges}>
              save
            </SaveButton>
            <DeleteButton type="submit" onClick={deleteScheduledActivity}>
              delete
            </DeleteButton>
          </NTColumn>
        </ActivityRow>
      )}
    </Draggable>
  );
}

function DragList(props) {
  const { scheduledActivities, openDurationModal, closeDurationModal } = props;
  return (
    <Droppable droppableId="droppable">
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          style={{ height: '70vh', overflow: 'scroll' }}
        >
          {scheduledActivities.map((activity) => (
            <DragItem
              key={activity.id}
              activity={activity}
              closeDurationModal={closeDurationModal}
              openDurationModal={openDurationModal}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

function ScheduledActivityDnD(props) {
  const { scheduledActivities } = props;
  const dispatch = useDispatch();

  const [activeActivity, setActiveActivity] = useState(undefined);

  function openDurationModal(id) {
    setActiveActivity(scheduledActivities.find((s) => s.id === id));
  }

  function closeDurationModal(id, newHMS) {
    const newDuration = hmsToSeconds(newHMS);
    if (!newDuration) {
      toast.error('activity must have a duration');
    } else {
      const activityUpdate = { id, duration: hmsToSeconds(newHMS) };
      dispatch(callUpdateScheduledActivity(activityUpdate));
    }
    setActiveActivity(undefined);
  }

  function onDragEnd(result) {
    const { destination, source } = result;
    if (!destination || destination.index === source.index) {
      return;
    }
    // todo find a less hackish way to push order changes
    const spliced = Array.from(scheduledActivities);
    const [removed] = spliced.splice(source.index, 1);
    spliced.splice(destination.index, 0, removed);
    spliced.forEach((sa, index) => {
      const callData = { id: sa.id, order: index };
      dispatch(callUpdateScheduledActivity(callData));
    });
  }

  return (
    <NTBox>
      <DragDropContext onDragEnd={onDragEnd}>
        <DragList
          scheduledActivities={scheduledActivities}
          openDurationModal={openDurationModal}
          closeDurationModal={closeDurationModal}
        />
      </DragDropContext>
      <Toaster />
      <DurationModal activity={activeActivity} onClose={closeDurationModal} />
    </NTBox>
  );
}

export default ScheduledActivityDnD;
