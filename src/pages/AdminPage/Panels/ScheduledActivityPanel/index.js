import React from 'react';
import styled from '@emotion/styled';
import { Box, ToggleMenu } from '../../../../components/layoutComponents';
import { trainPamphlet } from '../../../../styles/colors';

const TrainPamphletToggleMenu = styled(ToggleMenu)`
  background: ${trainPamphlet.background};
`;

const TrainPamphletButton = styled.button`
  background: ${trainPamphlet.surface};
  color: ${trainPamphlet.onSurface};
`;

function ScheduledActivityPanel(props) {
  const { isOpen, requestClose } = props;
  return (
    <Box>
      <TrainPamphletToggleMenu isOpen={isOpen}>
        <div style={{ height: '50vh' }}>
          <TrainPamphletButton type="button" onClick={requestClose}>
            close
          </TrainPamphletButton>
          <span>something here</span>
        </div>
      </TrainPamphletToggleMenu>
    </Box>
  );
}

export default ScheduledActivityPanel;
