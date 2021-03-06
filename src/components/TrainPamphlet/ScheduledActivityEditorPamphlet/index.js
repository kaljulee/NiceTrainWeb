import React from 'react';
import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';
import { useDispatch } from 'react-redux';
import { NTBox, NTRow, ToggleMenu } from '../../layoutComponents';
import { trainPamphletTheme } from '../../../styles/colors';
import TrainActivitiesEditor from './TrainActivitiesEditor';
import { callCreateScheduledActivity } from '../../../redux/thunks/scheduledActivity';

const panelHeight = '70vh';

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
        order: scheduledActivities.length,
        duration: 0
      })
    );
  }
  return (
    <NTBox>
      <ThemeProvider theme={trainPamphletTheme}>
        <ThemedToggleMenu isOpen={isOpen}>
          <NTBox style={{ height: panelHeight }}>
            <NTRow>
              <ThemedButton type="button" onClick={requestClose}>
                close
              </ThemedButton>
              <ThemedButton onClick={handleAdd} type="button">
                add new
              </ThemedButton>
            </NTRow>
            <NTRow>
              <TrainActivitiesEditor
                panelHeight={panelHeight}
                scheduledActivities={scheduledActivities}
              />
            </NTRow>
          </NTBox>
        </ThemedToggleMenu>
      </ThemeProvider>
    </NTBox>
  );
}

export default ScheduledActivityPanel;
