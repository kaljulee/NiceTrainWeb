import React from 'react';
import styled from '@emotion/styled';
import { NTBox, NTRow } from '../../../../components/layoutComponents';
import ScheduledActivityDnD from './ScheduledActivityDnD';

const ActivityFieldTabs = styled(NTBox)`
  background: green;
`;

function TrainActivitiesEditor(props) {
  const { scheduledActivities } = props;
  return (
    <NTRow style={{ border: '1px solid black', height: '100%' }}>
      <div style={{ flex: 8 }}>
        <ScheduledActivityDnD scheduledActivities={scheduledActivities} />
      </div>
      <div style={{ flex: 3 }}>
        <ActivityFieldTabs />
      </div>
    </NTRow>
  );
}

export default TrainActivitiesEditor;
