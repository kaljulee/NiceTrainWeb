import React from 'react';
import styled from '@emotion/styled';
import { NTColumn, NTRow } from '../../../../../components/layoutComponents';
import YTRLinks from '../components/YTRLinks';
import StaticInfo from '../components/StaticInfo';
import ActivityInfo from '../components/ActivityInfo';

const DisplayWrapper = styled(NTRow)`
  box-sizing: border-box;
  width: 100%;
`;

const DisplayColumn = styled(NTColumn)`
  width: 100%;
`;

function DetailsDisplay(props) {
  const { activity } = props;
  console.table(activity);
  // let renderArray = [];
  // if (activity) {
  //   const keys = Object.keys(activity);
  //   // renderArray = Object.keys(activity).map((k) => <div>{activity[k]}</div>);
  //   // console.log('render array');
  //   // console.log(renderArray);
  // }
  return (
    <DisplayWrapper>
      <DisplayColumn>
        <StaticInfo />
      </DisplayColumn>
      <DisplayColumn>
        <ActivityInfo activity={activity} />
      </DisplayColumn>
      <DisplayColumn>
        <YTRLinks activity={activity} />
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
