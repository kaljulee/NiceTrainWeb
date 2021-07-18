import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons/faQuestionCircle';
import colors from '../../styles/colors';

function InfoButton(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      type="button"
      style={{ backgroundColor: colors.boardComponent, border: 'none' }}
    >
      <FontAwesomeIcon
        icon={faQuestionCircle}
        style={{
          display: 'flex',
          color: colors.logYellow,
          width: '2vh',
          height: '2vh'
        }}
      />
    </button>
  );
}

InfoButton.defaultProps = {
  onClick: () => {
    console.log('info button clicked!');
  }
};

export default InfoButton;
