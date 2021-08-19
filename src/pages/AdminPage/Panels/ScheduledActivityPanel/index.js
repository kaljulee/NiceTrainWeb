import React from 'react';
import { useSelector } from 'react-redux';
import { AdminTitle, Box } from '../../../../components/styledComponents';
import AdminList from '../../AdminList';
import AdminDnD from '../../AdminDnD';

function ScheduledActivityPanel(props) {
  const { currentScheduledTrain, title } = props;
  console.log('SAP');
  console.log(currentScheduledTrain);
  console.log('...');
  const scheduledActivities = useSelector((state) => state.scheduledActivities);
  return (
    <Box>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <AdminTitle>Scheduled Activities</AdminTitle>
        <button type="button">add activity</button>
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

export default ScheduledActivityPanel;
