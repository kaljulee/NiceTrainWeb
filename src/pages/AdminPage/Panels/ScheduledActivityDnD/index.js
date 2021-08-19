import React from 'react';
import { useSelector } from 'react-redux';
import { AdminTitle, Box } from '../../../../components/layoutComponents';
import AdminDnD from '../../AdminDnD';

function ScheduledActivityDnD(props) {
  const { currentScheduledTrain, title } = props;
  const scheduledActivities = useSelector((state) => state.scheduledActivities);
  return (
    <Box>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <AdminTitle>Scheduled Activities</AdminTitle>
      </div>
      {currentScheduledTrain ? (
        <AdminDnD currentScheduledTrain={currentScheduledTrain} />
      ) : (
        <Box>
          <AdminTitle>no train selected</AdminTitle>
        </Box>
      )}
    </Box>
  );
}

export default ScheduledActivityDnD;
