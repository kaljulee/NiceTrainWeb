import { Droppable } from 'react-beautiful-dnd';
import React from 'react';
import DragItem from './DragItem';

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

export default DragList;
