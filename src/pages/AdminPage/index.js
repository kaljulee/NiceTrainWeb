import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {
  AmplifyAuthenticator,
  AmplifyAuthContainer,
  AmplifySignIn,
  AmplifySignUp,
} from '@aws-amplify/ui-react';
import { onAuthUIStateChange } from '@aws-amplify/ui-components';
import { connect, useDispatch } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import StationPanel from './Panels/StationPanel';
import YouTubeResourcePanel from './Panels/YouTubeResourcePanel';
import ActivityPanel from './Panels/ActivityPanel';
import ScheduledTrainPanel from './Panels/ScheduledTrainPanel';
import PamphletAdmin from './PamphletAdmin';
import FormatPanel from './Panels/FormatPanel';
import { NTPage, NTSection } from '../../components/layoutComponents';
import { TabContainer } from '../../components/styledComponents';
import LongMessagePanel from './Panels/LongMessagePanel';
import { calculateLoginStatus } from '../../utils';
import { setLoginStatus } from '../../redux/reducers/settingsReducer';
import { USER_STATES } from '../../constants';
import { trainPamphletTheme } from '../../styles/colors';

const StyledTab = styled(Tab)`
  color: ${(p) => p.theme.onPrimarySurface};
`;

function AdminPage(props) {
  const { loginStatus } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthUIStateChange((nextAuthState, authData) => {
      dispatch(setLoginStatus(calculateLoginStatus(authData, nextAuthState)));
    });
  }, []);

  return (
    <ThemeProvider theme={trainPamphletTheme}>
      <NTPage>
        {loginStatus === USER_STATES.UNAUTH ? (
          <AmplifyAuthContainer>
            <AmplifyAuthenticator>
              <AmplifySignIn slot='sign-in' headerText='Nice Train Admin' />
              <AmplifySignUp
                slot='sign-up'
                formFields={[
                  { type: 'username' },
                  { type: 'password' },
                  { type: 'email' },
                ]}
              />
            </AmplifyAuthenticator>
          </AmplifyAuthContainer>
        ) : (
          <NTSection
            style={{
              height: '100%',
              width: '90vw',
              margin: 'auto',
            }}
          >
            <PamphletAdmin />
          </NTSection>
        )}
      </NTPage>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => ({
  loginStatus: state.settings.loginStatus,
});

export default connect(mapStateToProps)(AdminPage);
