import React from 'react';
import { jsx, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { NTBox, NTColumn, NTRow } from '../layoutComponents';
import { NTLabel, NTInput } from '../styledComponents';

export const SaveButton = styled.button`
  background: ${(props) => props.theme.primarySurface};
  color: ${(props) => props.theme.onPrimarySurface};
  height: 100%;
`;

export const DeleteButton = styled(SaveButton)`
  background: ${(props) => props.theme.onPrimarySurface};
  color: ${(props) => props.theme.primarySurface};
  height: 5vh;
`;

const NTInputColumn = styled(NTColumn)`
  justify-content: space-around;
  padding: 5px 0 5px 0;
`;

export const InfoRow = styled(NTRow)`
  width: 100%;
`;

export const InfoColumn = styled(NTColumn)`
  font-family: helvetica;
  font-size: 3vw;
  text-align: center;
  a {
    color: ${(p) => p.theme.primarySurface};
  }
  span {
    text-align: center;
    color: ${(p) => p.theme.primarySurface};
  }
`;

export const NoInfoPlaceholder = styled.div`
  font-size: 18px;
  color: ${(p) => p.theme.primarySurface};
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const PamphletLabel = styled(NTLabel)`
  background: ${(p) => p.theme.primarySurface};
  color: ${(p) => p.theme.onPrimarySurface};
  margin: 0;
`;

export const PamphletSubLabel = styled(PamphletLabel)`
  text-align: center;
  font-weight: normal;
  border-top: 1px solid ${(p) => p.theme.background};
  border-bottom: none;
`;

export function PamphletInput(props) {
  const { onBlur, value, onChange, type = 'text', style, onFocus } = props;
  const theme = useTheme();
  return (
    <NTInput
      onBlur={onBlur}
      onFocus={onFocus}
      type={type}
      value={value || value === 0 ? value : ''}
      onChange={onChange}
      style={{
        color: theme.onBackground,
        background: theme.background,
        border: 'none',
        width: 'inherit',
        ...style
      }}
    />
  );
}

PamphletInput.defaultProps = {
  value: ''
};

export function PamphletDurationInput(props) {
  return (
    <NTBox>
      <PamphletInput
        {...props}
        style={{
          textAlign: 'center',
          padding: 0,
          height: '10vh',
          fontSize: '8vh'
        }}
      />
    </NTBox>
  );
}

export function PamphletDurationButton(props) {
  const { onClick } = props;
  return (
    <button style={{ height: '100%' }} onClick={onClick} type="button">
      {props.children}
    </button>
  );
}

export const PamphletButton = styled.button`
  color: ${(p) => p.theme.onPrimarySurface};
  background: ${(p) => p.theme.primarySurface};
  height: 5vh;
  border: 1px solid ${(p) => p.theme.background};
`;
