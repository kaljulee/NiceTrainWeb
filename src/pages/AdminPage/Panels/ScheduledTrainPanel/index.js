import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import AdminList from '../../components/AdminList';
import ScheduledTrainForm from './ScheduledTrainForm';
import ScheduledActivityPanel from '../ScheduledActivityPanel';
import AdminDnD from '../../components/AdminDnD';
import { callGetScheduledActivitiesByTrain } from '../../../../redux/thunks/scheduledActivity';

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
    <div style={{ height: '100%' }}>
      <button type="button" onClick={handlePanelToggle}>
        edit activities
      </button>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            display: 'flex',
            flex: 4,
            flexDirection: 'column',
            marginRight: '2vw',
            marginLeft: '2vw'
          }}
        >
          <AdminList
            title={title}
            data={listData}
            fields={listFields}
            onDatumClick={onDatumClick}
          />
        </div>
        <div
          style={{
            flex: 5,
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '2vw',
            marginRight: '2vw'
          }}
        >
          <div style={{ display: 'flex', height: '100%' }}>
            <ScheduledTrainForm title={title} currentDatum={currentDatum} />
            <div style={{ width: '100%' }}>
              <AdminList
                title="Activity"
                data={scheduledActivities}
                fields={['name']}
                onDatumClick={() => {}}
              />
            </div>
          </div>
        </div>
      </div>
      <ScheduledActivityPanel
        isOpen={isPanelOpen}
        scheduledActivities={scheduledActivities}
        scheduledTrainID={currentDatum ? currentDatum.id : undefined}
        requestClose={() => {
          setIsPanelOpen(false);
        }}
      />
      <Toaster />
    </div>
  );
}

export default ScheduledTrainPanel;
