import React from 'react';
import styled from '@emotion/styled';
import { NTBox } from '../../../../../../components/layoutComponents';
import { PamphletLabel } from '../../../../../../components/styledComponents/trainPamphlet';

const SectionBody = styled(NTBox)`
  padding: 0 1vw;
`;

const SectionHeader = styled.div`
  padding-left: 1vw;
  background: ${(p) => p.theme.primarySurface};
  color: ${(p) => p.theme.onPrimarySurface};
`;

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
