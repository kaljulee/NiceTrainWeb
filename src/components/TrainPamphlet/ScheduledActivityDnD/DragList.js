import { Droppable } from 'react-beautiful-dnd';
import React from 'react';
import { useTheme } from '@emotion/react';
import DragItem from './DragItem';

function DragList(props) {
  const {
    scheduledActivities,
    openDurationModal,
    closeDurationModal,
    errorToast
  } = props;
  const theme = useTheme();
  return (
    <Droppable droppableId="droppable">
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          style={{
            height: '70vh',
            overflow: 'scroll',
            background: `${theme.primarySurface}aa`
          }}
        >
          {scheduledActivities.map((activity) => (
            <DragItem
              errorToast={errorToast}
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
