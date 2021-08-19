import React from 'react';
import { ToggleMenu } from '../../../../components/layoutComponents';

function ScheduledActivityPanel(props) {
  const { isOpen, requestClose } = props;
  return (
    <ToggleMenu isOpen={isOpen}>
      <div style={{ height: '50vh' }}>
        <button type="button" onClick={requestClose}>
          close
        </button>
        <span>something here</span>
      </div>
    </ToggleMenu>
  );
}

export default ScheduledActivityPanel;
