import React from 'react';
import { jsx, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { NTBox, NTColumn, NTRow } from '../layoutComponents';
import { NTLabel, NTInput } from '../styledComponents';

// todo significant technical debt here,
//  need to organize train pamphlet components and styles
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
  const { value, onChange, type = 'text', style } = props;
  const theme = useTheme();
  return (
    <NTInput
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

function DurationInput(props) {
  return (
    <NTBox style={{}}>
      <PamphletInput {...props} style={{ textAlign: 'center' }} />
    </NTBox>
  );
}

export function PamphletDurationInput(props) {
  const {
    duration: { h, m, s },
    onChange
  } = props;
  return (
    <NTColumn style={{ justifyContent: 'flex-start' }}>
      <PamphletLabel>Duration</PamphletLabel>
      <NTRow style={{ justifyContent: 'space-around' }}>
        <NTColumn>
          <PamphletSubLabel>h</PamphletSubLabel>
          <DurationInput
            value={h}
            onChange={(event) => onChange({ h: event.target.value })}
          />
        </NTColumn>
        <NTColumn>
          <PamphletSubLabel>m</PamphletSubLabel>
          <DurationInput
            value={m}
            onChange={(event) => onChange({ m: event.target.value })}
          />
        </NTColumn>
        <NTColumn>
          <PamphletSubLabel>s</PamphletSubLabel>
          <DurationInput
            value={s}
            onChange={(event) => onChange({ s: event.target.value })}
          />
        </NTColumn>
      </NTRow>
    </NTColumn>
  );
}

PamphletDurationInput.defaultProps = { duration: { h: 0, m: 0, s: 0 } };
