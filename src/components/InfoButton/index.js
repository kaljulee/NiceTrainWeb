import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons/faQuestionCircle';

function InfoButton(props) {
  return (
    <div>
      <FontAwesomeIcon
        icon={faQuestionCircle}
        style={{
          display: 'flex',
          color: 'purple',
          width: '2vh',
          height: '2vh'
        }}
      />
    </div>
  );
}

export default InfoButton;
