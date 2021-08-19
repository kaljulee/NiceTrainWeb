import styled from '@emotion/styled';

export const Box = styled.div({
  width: '100%',
  height: '100%'
});

export const AdminTitle = styled.h3({
  color: 'goldenrod'
});

export const Row = styled.div({
  display: 'flex',
  flexDirection: 'row'
});

export const Column = styled.div({
  display: 'flex',
  flexDirection: 'column'
});

export const ToggleMenu = styled.div`
  position: absolute;
  bottom: 0px;
  max-height: ${(props) => (props.isOpen ? '100%' : '0')};
  width: 100%;
  background-color: pink;
  background: pink;
  overflow: hidden;
  transition: all 0.3s ease-out;
`;
