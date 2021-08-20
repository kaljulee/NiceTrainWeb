import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, ToggleMenu } from '../../../../components/layoutComponents';
import { trainPamphlet } from '../../../../styles/colors';
import TrainActivitiesEditor from './TrainActivitiesEditor';
import { callCreateScheduledActivity } from '../../../../redux/thunks/scheduledActivity';

const ThemedToggleMenu = styled(ToggleMenu)`
  background: ${(props) => props.theme.background};
`;

const ThemedButton = styled.button`
  background: ${(props) => props.theme.surface};
  color: ${(props) => props.theme.onSurface};
`;

function ScheduledActivityPanel(props) {
  // scheduledActivities fetch calls are controlled by the scheduledTrain controls
  const { isOpen, requestClose, scheduledTrainID, scheduledActivities } = props;
  const dispatch = useDispatch();
  function handleAdd() {
    dispatch(
      callCreateScheduledActivity({
        scheduledTrainID,
        order: scheduledActivities.length
      })
    );
  }
  return (
    <Box>
      <ThemeProvider theme={trainPamphlet}>
        <ThemedToggleMenu isOpen={isOpen}>
          <div style={{ height: '50vh' }}>
            <ThemedButton type="button" onClick={requestClose}>
              close
            </ThemedButton>
            <ThemedButton onClick={handleAdd} type="button">
              add new
            </ThemedButton>
            <TrainActivitiesEditor scheduledActivities={scheduledActivities} />
          </div>
        </ThemedToggleMenu>
      </ThemeProvider>
    </Box>
  );
}

export default ScheduledActivityPanel;
