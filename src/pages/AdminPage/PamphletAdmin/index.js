import React from 'react';
import styled from '@emotion/styled';
import PamphletList from '../../../components/TrainPamphlet/PamphletList';
import { NTPage } from '../../../components/layoutComponents';
import { mq5 } from '../../../styles/breakpoints';

const PamphletAdminWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

function PamphletAdmin() {
  return (
    <PamphletAdminWrapper>
      <PamphletList />
    </PamphletAdminWrapper>
  );
}

export default PamphletAdmin;
