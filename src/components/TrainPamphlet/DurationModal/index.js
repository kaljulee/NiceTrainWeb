import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useTheme } from '@emotion/react';
import {
  PamphletLabel,
  PamphletSubLabel,
  PamphletDurationInput,
  PamphletButton
} from '../trainPamphlet';
import { NTColumn, NTRow } from '../../layoutComponents';
import { secondsToHMS } from '../../../utils';

function DurationModal(props) {
  const { onClose, activity } = props;
  const theme = useTheme();
  const modalStyle = {
    overlay: {
      background: `${theme.background}CC`
    },
    content: {
      border: `1px solid ${theme.primarySurface}`,
      boxSizing: 'border-box',
      background: theme.background,
      top: '50%',
      left: '50%',
      transform: `translate(-50%, -50%)`,
      height: 'fit-content',
      width: '80vw',
      padding: 0,
      overflow: 'hidden'
    }
  };

  const [hms, setHMS] = useState(secondsToHMS(activity.duration));

  useEffect(() => {
    setHMS(secondsToHMS(activity.duration));
  }, [activity]);

  function onChange(newValue) {
    setHMS({ ...hms, ...newValue });
  }

  function saveAndClose() {
    console.log('would save');
    onClose(activity.id, hms);
  }

  return (
    <Modal isOpen={!!activity.id} ariaHideApp={false} style={modalStyle}>
      <NTColumn>
        <PamphletLabel>Duration</PamphletLabel>
        <NTRow style={{ justifyContent: 'space-around' }}>
          <NTColumn>
            <PamphletSubLabel>h</PamphletSubLabel>
            <PamphletDurationInput
              value={hms.h}
              onChange={(event) => onChange({ h: event.target.value })}
              onFocus={() => {
                onChange({ h: '' });
              }}
            />
          </NTColumn>
          <NTColumn>
            <PamphletSubLabel>m</PamphletSubLabel>
            <PamphletDurationInput
              value={hms.m}
              onChange={(event) => onChange({ m: event.target.value })}
              onFocus={() => {
                onChange({ m: '' });
              }}
            />
          </NTColumn>
          <NTColumn>
            <PamphletSubLabel>s</PamphletSubLabel>
            <PamphletDurationInput
              value={hms.s}
              onChange={(event) => onChange({ s: event.target.value })}
              onFocus={() => {
                onChange({ s: '' });
              }}
            />
          </NTColumn>
        </NTRow>
      </NTColumn>
      <NTColumn>
        <PamphletButton onClick={saveAndClose}>save and close</PamphletButton>
      </NTColumn>
    </Modal>
  );
}

DurationModal.defaultProps = { activity: { duration: 0 } };

export default DurationModal;
