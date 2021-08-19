import React from 'react';
import { ToggleMenu } from '../../../../components/styledComponents';

function ScheduledActivityPanel(props) {
  const { isOpen } = props;
  return (
    <ToggleMenu isOpen={isOpen}>
      <div style={{ height: 300 }}>
        <span>something here</span>
      </div>
    </ToggleMenu>
  );
}

export default ScheduledActivityPanel;
