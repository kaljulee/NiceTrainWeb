import React from 'react';
import styled from '@emotion/styled';

// function ViewContainer(props) {
//   const { children } = props;
//   return <div>{children}</div>;
// }

const ViewContainer = styled.div`
  height: 100vh;
  display: grid;
  box-sizing: border-box;
  grid-template-rows: 5vh 95vh;
  grid-template-areas:
    'nav'
    'body';
`;

export default ViewContainer;
