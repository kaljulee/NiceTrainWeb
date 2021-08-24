import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import AdminList from '../../components/AdminList';
import ScheduledTrainForm from './ScheduledTrainForm';
import ScheduledActivityPanel from '../ScheduledActivityPanel';
import { callGetScheduledActivitiesByTrain } from '../../../../redux/thunks/scheduledActivity';
import {
  NTColumn,
  NTPanel,
  NTRow
} from '../../../../components/layoutComponents';

function ScheduledTrainPanel(props) {
  const title = 'ScheduledTrain';
  const dispatch = useDispatch();
  const listData = useSelector((state) => state.train.scheduledTrains);
  const allScheduledActivities = useSelector(
    (state) => state.train.scheduledActivities
  );
  const listFields = ['description', 'train_date', 'train_time'];
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [currentDatum, setCurrentDatum] = useState();

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

  function handlePanelToggle() {
    if (!isPanelOpen) {
      if (!currentDatum) {
        toast.error('No train selected');
        return;
      }
    }
    setIsPanelOpen(!isPanelOpen);
  }

  function onDatumClick(id) {
    if (!currentDatum || id !== currentDatum.id) {
      setCurrentDatum(listData.find((datum) => datum.id === id));
    }
  }
  return (
    <NTPanel style={{ flexDirection: 'column' }}>
      <NTRow>
        <AdminList
          title={title}
          data={listData}
          fields={listFields}
          onDatumClick={onDatumClick}
        />
      </NTRow>
      <NTPanel>
        <ScheduledTrainForm title={title} currentDatum={currentDatum} />
        <NTColumn>
          <AdminList
            title="Activity"
            data={scheduledActivities}
            fields={['name']}
            onDatumClick={() => {}}
          />
          <button type="button" onClick={handlePanelToggle}>
            edit activities
          </button>
        </NTColumn>
      </NTPanel>
      <NTRow>
        <ScheduledActivityPanel
          isOpen={isPanelOpen}
          scheduledActivities={scheduledActivities}
          scheduledTrainID={currentDatum ? currentDatum.id : undefined}
          requestClose={() => {
            setIsPanelOpen(false);
          }}
        />
      </NTRow>
      <Toaster />
    </NTPanel>
  );
}

export default ScheduledTrainPanel;
