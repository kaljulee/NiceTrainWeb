import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../../styles/css/custom-react-tabs.css';
import {
  AmplifyAuthenticator,
  AmplifyAuthContainer,
  AmplifySignIn
} from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { useSelector, useDispatch } from 'react-redux';
import NiceTrainPage from '../NiceTrainPage';
import { callListYouTubeResources } from '../../redux/thunks/youTubeResource';
import { callListStations } from '../../redux/thunks/station';
import colors from '../../styles/colors';
import StationPanel from './Panels/StationPanel';
import YouTubeResourcePanel from './Panels/YouTubeResourcePanel';

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
  const dispatch = useDispatch();
  // todo centralize initial redux population
  useEffect(() => {
    dispatch(callListYouTubeResources());
  }, []);
  useEffect(() => {
    dispatch(callListStations());
  }, []);

  return (
    <NiceTrainPage>
      {authState === AuthState.SignedIn && user ? (
        <div
          style={{
            backgroundColor: colors.boardBack,
            height: '100%',
            width: '90vw',
            margin: 'auto'
          }}
        >
          <Tabs>
            <TabList>
              <Tab>Stations</Tab>
              <Tab>YT Resources</Tab>
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
              <h2>activity panel</h2>
            </TabPanel>
            <TabPanel>
              <h2>scheduling panel</h2>
            </TabPanel>
            <TabPanel>
              <h2>info message panel</h2>
            </TabPanel>
          </Tabs>
        </div>
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
    </NiceTrainPage>
  );
}

export default AdminPage;
