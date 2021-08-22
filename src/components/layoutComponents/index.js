import styled from '@emotion/styled';

export const NTBox = styled.div({
  width: '100%',
  height: '100%',
  boxSizing: 'border-box'
});

export const NTPage = styled(NTBox)`
  padding-top: 5vh;
  background: ${(p) => p.theme.background};
  color: ${(p) => p.theme.onBackground};
`;

export const NTSection = styled(NTBox)`
  background: ${(p) => p.theme.primarySurface};
  color: ${(p) => p.theme.onPrimarySurface};
  padding: 0 1vw 0 1vw;
`;

export const NTRow = styled.div({
  display: 'flex',
  flexDirection: 'row'
});

export const NTColumn = styled(NTBox)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

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
