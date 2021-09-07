import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { Toaster, toast } from 'react-hot-toast';
import { NTBox } from '../../layoutComponents';
import { hmsToSeconds } from '../../../utils';
import { callUpdateScheduledActivity } from '../../../redux/thunks/scheduledActivity';
import DurationModal from '../DurationModal';
import DragList from './DragList';

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

  function errorToast(message) {
    toast.error(message);
  }

  return (
    <NTBox>
      <DragDropContext onDragEnd={onDragEnd}>
        <DragList
          errorToast={errorToast}
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
