import React from 'react';
import styled from '@emotion/styled';
import { NTColumn, NTRow } from '../../../../../components/layoutComponents';
import YTRLinks from '../components/YTRLinks';
import StaticInfo from '../components/StaticInfo';
import ActivityInfo from '../components/ActivityInfo';

const DisplayWrapper = styled.div`
  box-sizing: border-box;
`;

const DisplayColumn = styled(NTColumn)`
  border: 1px solid ${(p) => p.theme.primarySurface};
`;

function DetailsDisplay(props) {
  const { activity } = props;
  console.table(activity);
  // let renderArray = [];
  if (activity) {
    const keys = Object.keys(activity);
    // renderArray = Object.keys(activity).map((k) => <div>{activity[k]}</div>);
    // console.log('render array');
    // console.log(renderArray);
  }
  return (
    <DisplayWrapper>
      <DisplayColumn>
        <StaticInfo />
      </DisplayColumn>
      <DisplayColumn>
        <ActivityInfo />
      </DisplayColumn>
      <DisplayColumn>
        <YTRLinks />
      </DisplayColumn>
    </DisplayWrapper>
  );
}

export default DetailsDisplay;

// Object.keys(activity).map((k) => (
//     <NTRow>
//         <div>{k}</div>
//         <div>{activity[k]}</div>
//     </NTRow>
