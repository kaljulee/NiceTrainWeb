import React from 'react';
import styled from '@emotion/styled';
import { Box, Row } from '../../../../components/layoutComponents';
import ScheduledActivityDnD from './ScheduledActivityDnD';

const ActivityFieldTabs = styled(Box)`
  background: green;
`;

function TrainActivitiesEditor(props) {
  const { scheduledActivities } = props;
  return (
    <Row style={{ border: '1px solid black', height: '100%' }}>
      <div style={{ flex: 8 }}>
        <ScheduledActivityDnD scheduledActivities={scheduledActivities} />
      </div>
      <div style={{ flex: 3 }}>
        <ActivityFieldTabs />
      </div>
    </Row>
  );
}

export default TrainActivitiesEditor;
