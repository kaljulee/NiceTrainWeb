import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';
import { Box, Row } from '../../../../components/layoutComponents';
import AdminSelect from '../../AdminSelect';
import { createOption } from '../../../../utils';
import AdminDurationInput from '../../AdminDurationInput';
import AdminInput from '../../AdminInput';
import { callDeleteScheduledActivity } from '../../../../redux/thunks/scheduledActivity';

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
  const [currentActivityOption, setCurrentActivityOption] = useState();
  const [currentFormatOption, setCurrentFormatOption] = useState();
  const [hmsValue, setHMSValue] = useState(
    activity.duration ? activity.duration : {}
  );
  const [nameValue, setNameValue] = useState(activity.name);
  const dispatch = useDispatch();

  function onDurationChange(arg) {
    setHMSValue({ ...hmsValue, ...arg });
  }

  function saveChanges() {
    console.log('would save changes');
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
          <AdminInput
            label="order"
            value={activity.order}
            onChange={() => {}}
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
    </Box>
  );
}

export default ScheduledActivityDnD;
