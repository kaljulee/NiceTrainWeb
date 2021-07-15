import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons/faQuestionCircle';
import colors from '../../styles/colors';

function InfoButton(props) {
  return (
    <div>
      <FontAwesomeIcon
        icon={faQuestionCircle}
        style={{ color: colors.logYellow, width: '2vh', height: '2vh' }}
      />
    </div>
  );
}

export default InfoButton;