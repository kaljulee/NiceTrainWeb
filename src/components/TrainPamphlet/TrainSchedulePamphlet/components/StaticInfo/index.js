import React from 'react';
import DetailsSection from '../DetailsSection';
import { NTColumn } from '../../../../layoutComponents';

function StaticInfo() {
  return (
    <NTColumn>
      <DetailsSection title='Station'>info about the station</DetailsSection>
      <DetailsSection title='Train'>
        info about the train goes here
      </DetailsSection>
    </NTColumn>
  );
}

export default StaticInfo;
