import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import { onAuthUIStateChange } from '@aws-amplify/ui-components';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { connect } from 'react-redux';
import { calculateLoginStatus } from '../../utils';
import { USER_STATES } from '../../constants';
import { setLoginStatus } from '../../redux/reducers/settingsReducer';

const NTNavLink = styled(NavLink)`
  padding: 0 2vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(p) => p.theme.accent};
  text-decoration: none;
  background: ${(p) => p.color};
  font-family: helvetica;
  letter-spacing: 5px;
  font-size: x-small;
  height: 5vh;
  opacity: 0.3;
`;

const NTLinkRow = styled.div`
  position: absolute;
  grid-area: nav;
  background: ${(p) => p.theme.background};
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const SignOutWrapper = styled.div`
  opacity: 0.6;
  overflow: hidden;
  box-sizing: border-box;
  height: 5vh;
  display: flex;
  align-items: center;
  --amplify-primary-color: ${(p) => p.color};
  --padding: 0;
  amplify-sign-out {
    padding: 0;
    overflow: hidden;
    box-sizing: border-box;
  }
`;

function NTLink(props) {
  const activeStyle = {
    opacity: 0.7,
  };
  return <NTNavLink {...props} activeStyle={activeStyle} />;
}

function TopNav(props) {
  const { loginStatus } = props;
  const theme = useTheme();
  useEffect(() => {
    onAuthUIStateChange((nextAuthState, authData) => {
      setLoginStatus(calculateLoginStatus(authData, nextAuthState));
    });
  }, []);

  return (
    <NTLinkRow>
      <NTLink to='/schedule'>SCHEDULE</NTLink>
      <NTLink to='/patches'>PATCHES</NTLink>
      <NTLink
        to='/admin'
        color={loginStatus === USER_STATES.GUEST ? theme.error : undefined}
      >
        {loginStatus === USER_STATES.GUEST ? 'GUEST' : 'ADMIN'}
      </NTLink>
      {loginStatus !== USER_STATES.UNAUTH && (
        <SignOutWrapper>
          <AmplifySignOut />
        </SignOutWrapper>
      )}
    </NTLinkRow>
  );
}

const mapStateToProps = (state) => ({
  loginStatus: state.settings.loginStatus,
});

export default connect(mapStateToProps)(TopNav);
