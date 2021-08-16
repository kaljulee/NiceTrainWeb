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
import {
  fetchStations,
  fetchYouTubeResources
} from '../../redux/reducers/trainReducer';
import colors from '../../styles/colors';
import AdminList from './AdminList';
import AdminForm from './AdminForm';

function AdminPage(props) {
  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();
  const stations = useSelector((state) => state.stations);
  useEffect(
    () =>
      onAuthUIStateChange((nextAuthState, authData) => {
        setAuthState(nextAuthState);
        setUser(authData);
      }),
    []
  );
  const dispatch = useDispatch();
  // const youTubeResources = useSelector((state) => state.youTubeResources);
  // const stations = useSelector((state) => state.stations);

  useEffect(() => {
    dispatch(fetchYouTubeResources());
  }, []);
  useEffect(() => {
    dispatch(fetchStations());
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
            <TabPanel style={{ height: '100%' }}>
              <div style={{ display: 'flex' }}>
                <div
                  style={{
                    display: 'flex',
                    flex: 4,
                    flexDirection: 'column',
                    marginRight: '2vw',
                    marginLeft: '2vw'
                  }}
                >
                  <AdminList
                    title="Stations"
                    data={stations}
                    fields={['name', 'abbrev']}
                  />
                </div>
                <div
                  style={{
                    flex: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    marginLeft: '2vw',
                    marginRight: '2vw'
                  }}
                >
                  <AdminForm title="Edit Station" />
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <h2>yt panel</h2>
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
