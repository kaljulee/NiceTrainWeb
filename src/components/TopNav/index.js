import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import styled from '@emotion/styled';

const baseStyle = {
  padding: 10,
  color: 'pink',
  textDecoration: 'none',
  fontFamily: 'helvetica',
  letterSpacing: 5,
  fontSize: 'x-small',
  opacity: 0.3
};

const NTNavLink = styled(NavLink)`
  padding: 1vh 2vh 1vh 2vh;
  color: ${(p) => p.theme.accent};
  text-decoration: none;
  font-family: helvetica;
  letter-spacing: 5px;
  font-size: x-small;
  opacity: 0.3;
`;

const NTLinkRow = styled.div`
  position: absolute;
  height: 5vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

function NTLink(props) {
  const activeStyle = {
    opacity: 0.7
  };
  return <NTNavLink {...props} activeStyle={activeStyle} />;
}

function TopNav() {
  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();
  useEffect(
    () =>
      onAuthUIStateChange((nextAuthState, authData) => {
        setAuthState(nextAuthState);
        setUser(authData);
      }),
    []
  );
  return (
    <NTLinkRow>
      <NTLink to="/schedule">SCHEDULE</NTLink>
      <NTLink to="/patches">PATCHES</NTLink>
      <NTLink to="/admin">ADMIN</NTLink>
      {authState === AuthState.SignedIn && user && (
        <div
          style={{
            opacity: 0.6,
            height: '80%',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <AmplifySignOut />
        </div>
      )}
    </NTLinkRow>
  );
}

export default TopNav;
