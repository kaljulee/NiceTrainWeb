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
    <NTRow
      style={{
        boxSizing: 'border-box',
        height: '100%',
        width: '100%'
      }}
    >
      <ScheduledActivityDnD scheduledActivities={scheduledActivities} />
      <div style={{}}>
        <ActivityFieldTabs />
      </div>
    </NTRow>
  );
}

TrainActivitiesEditor.defaultProps = { scheduledActivities: [] };

export default TrainActivitiesEditor;
