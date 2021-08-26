import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ScheduledTrainForm from './ScheduledTrainForm';
import AdminPanel from '../../AdminPanel';

function ScheduledTrainPanel() {
  const title = 'ScheduledTrain';
  const dispatch = useDispatch();
  const listData = useSelector((state) => state.train.scheduledTrains);
  const listFields = ['description', 'train_date', 'train_time'];

  return (
    <AdminPanel
      title="Trains"
      listData={listData}
      listFields={listFields}
      enforceDirection="column"
    >
      <ScheduledTrainForm title={title} />
    </AdminPanel>
  );
}

export default ScheduledTrainPanel;
