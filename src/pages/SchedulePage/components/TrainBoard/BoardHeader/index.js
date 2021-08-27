import React from 'react';
import { ReactSVG } from 'react-svg';
import { useCurrentWidth } from 'react-socks';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import nt_long_logo from '../../../../../assets/svg/nt_long_logo.svg';
import { mq5 } from '../../../../../styles/breakpoints';

const BoardHeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  background: ${(p) => p.theme.primarySurface};
  height: 100%;
  width: 100%;
`;

const HeaderLogo = styled(ReactSVG)`
  display: flex;
  justify-content: center;
  flex: 2;
  background: ${(p) => p.theme.background};
  min-width: 7vw;
`;

const HeaderText = styled.div`
  background: ${(p) => p.theme.background};
  margin-left: 1vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 7;
  span {
    background: ${(p) => p.theme.background};
    color: ${(p) => p.theme.onBackground};
    font-family: times new roman;
    letter-spacing: 6;
    font-weight: bold;
    padding-left: 2vh;
     padding-top: 1vh;
     padding-bottom: 1vh;
    ${mq5({ fontSize: [20, 30, 40, 50, 50] })}
`;

// todo use css for styles
function BoardHeader(props) {
  const width = useCurrentWidth();
  const theme = useTheme();
  return (
    <BoardHeaderWrapper>
      <HeaderLogo src={nt_long_logo} />
      <HeaderText>
        <span>TRAIN INFORMATION</span>
      </HeaderText>
    </BoardHeaderWrapper>
  );
}

export default BoardHeader;
