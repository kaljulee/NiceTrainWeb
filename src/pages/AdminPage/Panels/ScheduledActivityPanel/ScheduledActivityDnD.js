import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';
import { Toaster, toast } from 'react-hot-toast';
import { Box, Row } from '../../../../components/layoutComponents';
import AdminSelect from '../../AdminSelect';
import {
  createOption,
  getCurrentOption,
  hmsToSeconds,
  secondsToHMS
} from '../../../../utils';
import AdminDurationInput from '../../AdminDurationInput';
import AdminInput from '../../AdminInput';
import {
  callDeleteScheduledActivity,
  callUpdateScheduledActivity
} from '../../../../redux/thunks/scheduledActivity';

const ActivityRow = styled(Row)`
  display: flex;
  justify-content: space-between;
`;

const SaveButton = styled.button`
  background: ${(props) => props.theme.surface};
  color: ${(props) => props.theme.onSurface};
  height: 100%;
`;

const DeleteButton = styled(SaveButton)`
  background: ${(props) => props.theme.onSurface};
  color: ${(props) => props.theme.surface};
`;

function DragItem(props) {
  const { activity } = props;
  const possibleActivities = useSelector((state) => state.activities);
  const possibleFormats = useSelector((state) => state.formats);
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
  const dispatch = useDispatch();

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

  const activtyOptions = possibleActivities.map((a) =>
    createOption(a, 'description')
  );
  const formatOptions = possibleFormats.map((f) => createOption(f, 'name'));
  return (
    <Draggable draggableId={activity.id} index={activity.order}>
      {(provided) => (
        <ActivityRow
          style={{ justifyContent: 'space-between', padding: `2px 0 2px 0` }}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <AdminInput
            label="name"
            value={nameValue}
            onChange={(event) => setNameValue(event.target.value)}
          />
          <AdminSelect
            label="Activity"
            options={activtyOptions}
            value={currentActivityOption}
            onChange={setCurrentActivityOption}
          />
          <AdminSelect
            label="Format"
            options={formatOptions}
            value={currentFormatOption}
            onChange={setCurrentFormatOption}
          />
          <AdminDurationInput duration={hmsValue} onChange={onDurationChange} />
          <SaveButton type="submit" onClick={saveChanges}>
            save
          </SaveButton>
          <DeleteButton type="submit" onClick={deleteScheduledActivity}>
            delete
          </DeleteButton>
        </ActivityRow>
      )}
    </Draggable>
  );
}

function DragList(props) {
  const { scheduledActivities } = props;
  return (
    <Droppable droppableId="droppable">
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          {scheduledActivities.map((activity) => (
            <DragItem key={activity.id} activity={activity} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

function ScheduledActivityDnD(props) {
  const { scheduledActivities } = props;
  return (
    <Box>
      <DragDropContext>
        <DragList scheduledActivities={scheduledActivities} />
      </DragDropContext>
      <Toaster />
    </Box>
  );
}

export default ScheduledActivityDnD;
