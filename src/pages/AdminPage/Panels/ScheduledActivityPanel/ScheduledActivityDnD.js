import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { Box, Row } from '../../../../components/layoutComponents';
import AdminSelect from '../../AdminSelect';
import { createOption } from '../../../../utils';
import AdminDurationInput from '../../AdminDurationInput';
import AdminInput from '../../AdminInput';

const ActivityRow = styled(Row)`
  display: flex;
  justify-content: space-between;
`;

const SaveButton = styled.button`
  background: ${(props) => props.theme.surface};
  color: ${(props) => props.theme.onSurface};
  height: 100%;
`;

function DragItem(props) {
  const { activity } = props;
  const possibleActivities = useSelector((state) => state.activities);
  const possibleFormats = useSelector((state) => state.formats);
  const [currentActivityOption, setCurrentActivityOption] = useState();
  const [currentFormatOption, setCurrentFormatOption] = useState();
  const [nameValue, setNameValue] = useState();

  function saveChanges() {
    console.log('would save changes');
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
          <AdminInput label="name" value={nameValue} onChange={setNameValue} />
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
          <AdminDurationInput />
          <SaveButton type="submit" onClick={saveChanges}>
            save
          </SaveButton>
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
  const scheduledActivities = useSelector((state) => state.scheduledActivities);
  return (
    <Box>
      <DragDropContext>
        <DragList scheduledActivities={scheduledActivities} />
      </DragDropContext>
    </Box>
  );
}

export default ScheduledActivityDnD;
