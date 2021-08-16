import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import colors from '../../styles/colors';
import { callCreateStation } from '../../redux/reducers/trainReducer';

const baseStyle = {
  padding: 10,
  color: colors.logoYellow,
  textDecoration: 'none',
  fontFamily: 'helvetica',
  letterSpacing: 5,
  fontSize: 'x-small',
  opacity: 0.3
};

function NTLink(props) {
  const activeStyle = {
    opacity: 0.7
  };
  return <NavLink {...props} style={baseStyle} activeStyle={activeStyle} />;
}

function TopNav(props) {
  const dispatch = useDispatch();
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
    <div
      style={{
        position: 'absolute',
        height: '5vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
      }}
    >
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
    </div>
  );
}

export default TopNav;
