import styled from '@emotion/styled';

export const Box = styled.div({
  width: '100%',
  height: '100%',
  boxSizing: 'border-box'
});

export const Page = styled(Box)`
  padding-top: 5vh;
  background: ${(p) => p.theme.background};
  color: ${(p) => p.theme.onBackground};
`;

export const Section = styled(Box)`
  background: ${(p) => p.theme.primarySurface};
  color: ${(p) => p.theme.onPrimarySurface};
  padding: 0 1vw 0 1vw;
`;

export const Row = styled.div({
  display: 'flex',
  flexDirection: 'row'
});

export const Column = styled.div({
  display: 'flex',
  flexDirection: 'column'
});

export const ToggleMenu = styled.div`
  position: fixed;
  bottom: 0px;
  max-height: ${(props) => (props.isOpen ? '100%' : '0')};
  width: 100%;
  background-color: pink;
  background: pink;
  overflow: hidden;
  transition: all 0.8s ease-out;
`;
