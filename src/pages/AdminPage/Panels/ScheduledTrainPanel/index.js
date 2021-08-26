import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ScheduledTrainForm from './ScheduledTrainForm';
import { callGetScheduledActivitiesByTrain } from '../../../../redux/thunks/scheduledActivity';
import AdminPanel from '../../AdminPanel';

function ScheduledTrainPanel(props) {
  const { currentDatum } = props;
  const title = 'ScheduledTrain';
  const dispatch = useDispatch();
  const listData = useSelector((state) => state.train.scheduledTrains);
  const allScheduledActivities = useSelector(
    (state) => state.train.scheduledActivities
  );
  const listFields = ['description', 'train_date', 'train_time'];

  const [scheduledActivities, setScheduledActivities] = useState([]);
  useEffect(() => {
    if (!currentDatum) {
      return;
    }
    const { id } = currentDatum;
    if (!allScheduledActivities[id]) {
      dispatch(callGetScheduledActivitiesByTrain(id));
    } else {
      setScheduledActivities(allScheduledActivities[id]);
    }
  }, [allScheduledActivities, currentDatum]);

  return (
    <AdminPanel
      title="Trains"
      listData={listData}
      listFields={listFields}
      enforceDirection="column"
    >
      <ScheduledTrainForm
        title={title}
        currentDatum={currentDatum}
        scheduledActivities={scheduledActivities}
      />
    </AdminPanel>
  );
}

export default ScheduledTrainPanel;
