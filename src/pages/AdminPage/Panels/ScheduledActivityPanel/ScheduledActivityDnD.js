import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import styled from '@emotion/styled';
import { Box, Row } from '../../../../components/layoutComponents';
import AdminSelect from '../../AdminSelect';
import { createOption } from '../../../../utils';
import AdminDurationInput from '../../AdminDurationInput';

const ActivityRow = styled(Row)`
  display: flex;
  justify-content: space-between;
`;

function DragItem(props) {
  const { activity } = props;
  const possibleActivities = useSelector((state) => state.activities);
  const possibleFormats = useSelector((state) => state.formats);
  const [currentActivityOption, setCurrentActivityOption] = useState();
  const [currentFormatOption, setCurrentFormatOption] = useState();

  function saveChanges() {
    console.log('would save changes');
  }

  console.log(`item id ${activity.id}`);
  const activtyOptions = possibleActivities.map((a) =>
    createOption(a, 'description')
  );
  const formatOptions = possibleFormats.map((f) => createOption(f, 'name'));
  return (
    <Draggable draggableId={activity.id} index={activity.order}>
      {(provided) => (
        <ActivityRow
          style={{ justifyContent: 'space-between' }}
          ref={provided.ref}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
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
          <button type="submit" onClick={saveChanges}>
            save
          </button>
        </ActivityRow>
      )}
    </Draggable>
  );
}

function DragList(props) {
  const { activities } = props;
  return (
    <Droppable droppableId="droppable">
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          {activities.map((activity) => (
            <DragItem key={activity.id} activity={activity} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

function ScheduledActivityDnD(props) {
  const { activities } = props;
  console.log('activities');
  console.log(activities);
  console.log(props);
  return (
    <Box>
      <DragDropContext>
        <DragList activities={activities} />
      </DragDropContext>
    </Box>
  );
}

ScheduledActivityDnD.defaultProps = {
  activities: [
    { id: 'ham', order: 1 },
    { id: 'snax', order: 2 }
  ]
};

export default ScheduledActivityDnD;
