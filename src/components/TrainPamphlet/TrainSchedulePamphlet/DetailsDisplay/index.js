import React from 'react';
import styled from '@emotion/styled';
import { NTColumn, NTRow } from '../../../layoutComponents';
import YTRLinks from '../components/YTRLinks';
import StaticInfo from '../components/StaticInfo';
import ActivityInfo from '../components/ActivityInfo';

const DisplayWrapper = styled(NTRow)`
  box-sizing: border-box;
  width: 100%;
`;

const DisplayColumn = styled(NTColumn)`
  width: 100%;
  flex: ${(p) => p.$flex};
`;

function DetailsDisplay(props) {
  const { activity } = props;
  return (
    <DisplayWrapper>
      <DisplayColumn $flex={2}>
        <ActivityInfo activity={activity} />
      </DisplayColumn>
      <DisplayColumn $flex={2}>
        <YTRLinks activity={activity} />
      </DisplayColumn>
    </DisplayWrapper>
  );
}

export default DetailsDisplay;
