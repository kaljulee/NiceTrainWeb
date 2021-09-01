import React from 'react';
import DetailsSection from '../DetailsSection';
import { NTColumn } from '../../../../layoutComponents';

function StaticInfo(props) {
  return (
    <NTColumn>
      <DetailsSection title="Station">info about the station</DetailsSection>
      <DetailsSection title="Train">
        info about the train goes here
      </DetailsSection>
    </NTColumn>
  );
}

// StaticInfo.defaultProps = { activity: {} };

export default StaticInfo;
