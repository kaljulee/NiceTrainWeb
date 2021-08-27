import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons/faQuestionCircle';
import { useTheme } from '@emotion/react';

function InfoButton() {
  const theme = useTheme();
  return (
    <div>
      <FontAwesomeIcon
        icon={faQuestionCircle}
        style={{
          display: 'flex',
          color: theme.accent,
          width: '2vh',
          height: '2vh'
        }}
      />
    </div>
  );
}

export default InfoButton;
