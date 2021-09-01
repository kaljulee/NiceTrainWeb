import React from 'react';
import styled from '@emotion/styled';
import { NTBox } from '../../../../layoutComponents';
import { PamphletLabel } from '../../../trainPamphlet';

const SectionBody = styled(NTBox)``;

const SectionWrapper = styled(NTBox)`
  border: 1px solid ${(p) => p.theme.primarySurface};
`;

function DetailsSection(props) {
  const { title } = props;
  return (
    <SectionWrapper>
      <PamphletLabel>
        <span>{title}</span>
      </PamphletLabel>
      <SectionBody>{props.children}</SectionBody>
    </SectionWrapper>
  );
}

export default DetailsSection;
