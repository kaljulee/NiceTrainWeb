import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons/faQuestionCircle';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

const StyledButton = styled.button`
  background: ${(p) => p.theme.background};
  border: none;
`;

function InfoButton(props) {
  const { onClick } = props;
  const theme = useTheme();
  return (
    <StyledButton onClick={onClick} type="button">
      <FontAwesomeIcon
        icon={faQuestionCircle}
        style={{
          display: 'flex',
          color: theme.accent,
          width: '2vh',
          height: '2vh'
        }}
      />
    </StyledButton>
  );
}

export default InfoButton;
