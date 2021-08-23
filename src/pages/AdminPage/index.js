import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import '../../styles/css/custom-react-tabs.css';
import {
  AmplifyAuthenticator,
  AmplifyAuthContainer,
  AmplifySignIn
} from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import StationPanel from './Panels/StationPanel';
import YouTubeResourcePanel from './Panels/YouTubeResourcePanel';
import ActivityPanel from './Panels/ActivityPanel';
import ScheduledTrainPanel from './Panels/ScheduledTrainPanel';
import FormatPanel from './Panels/FormatPanel';
import { NTPage, NTSection } from '../../components/layoutComponents';
import { TabContainer } from '../../components/styledComponents';
import LongMessagePanel from './Panels/LongMessagePanel';

function AdminPage(props) {
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
    <NTPage>
      {authState === AuthState.SignedIn && user ? (
        <NTSection
          style={{
            height: '100%',
            width: '90vw',
            margin: 'auto'
          }}
        >
          <TabContainer>
            <Tabs>
              <TabList>
                <Tab>Stations</Tab>
                <Tab>YT Resources</Tab>
                <Tab>Formats</Tab>
                <Tab>Activities</Tab>
                <Tab>Train Scheduling</Tab>
                <Tab>Information Message</Tab>
              </TabList>
              <TabPanel>
                <StationPanel />
              </TabPanel>
              <TabPanel>
                <YouTubeResourcePanel />
              </TabPanel>
              <TabPanel>
                <FormatPanel />
              </TabPanel>
              <TabPanel>
                <ActivityPanel />
              </TabPanel>
              <TabPanel>
                <ScheduledTrainPanel />
              </TabPanel>
              <TabPanel>
                <LongMessagePanel />
              </TabPanel>
            </Tabs>
          </TabContainer>
        </NTSection>
      ) : (
        <AmplifyAuthContainer>
          <AmplifyAuthenticator>
            <AmplifySignIn
              hideSignUp
              slot="sign-in"
              headerText="Nice Train Admin"
            />
          </AmplifyAuthenticator>
        </AmplifyAuthContainer>
      )}
    </NTPage>
  );
}

export default AdminPage;
