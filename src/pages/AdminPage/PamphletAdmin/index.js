import React from 'react';
import styled from '@emotion/styled';
import PamphletList from '../../../components/TrainPamphlet/PamphletList';
import { NTPage } from '../../../components/layoutComponents';
import { mq5 } from '../../../styles/breakpoints';

const PamphletAdminWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 95% 5%;
  grid-template-areas:
    'pamphlet-admin-body'
    'pamphlet-admin-footer';
`;

const PamphletAdminFooter = styled.div`
  grid-area: pamphlet-admin-footer;
  background: ${(p) => p.theme.primarySurface};
`;

function PamphletAdmin() {
  return (
    <PamphletAdminWrapper>
      <PamphletList style={{ gridArea: 'pamphlet-admin-body' }} />
      <PamphletAdminFooter />
    </PamphletAdminWrapper>
  );
}

export default PamphletAdmin;
