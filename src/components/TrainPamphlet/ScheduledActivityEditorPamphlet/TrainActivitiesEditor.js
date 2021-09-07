import React from 'react';
import styled from '@emotion/styled';
import { NTBox, NTRow } from '../../layoutComponents';
import Index from '../ScheduledActivityDnD';

const ActivityFieldTabs = styled(NTBox)`
  background: green;
`;

function TrainActivitiesEditor(props) {
  const { scheduledActivities, panelHeight } = props;
  return (
    <NTRow
      style={{
        boxSizing: 'border-box',
        height: '100%',
        width: '100%'
      }}
    >
      <div style={{ display: 'flex', flex: 5 }}>
        <Index
          panelHeight={panelHeight}
          scheduledActivities={scheduledActivities}
        />
      </div>
      <div style={{ display: 'flex', flex: 2 }}>
        <ActivityFieldTabs />
      </div>
    </NTRow>
  );
}

TrainActivitiesEditor.defaultProps = { scheduledActivities: [] };

TrainActivitiesEditor.defaultProps = { panelHeight: '30vh' };

export default TrainActivitiesEditor;
