import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {
  AmplifyAuthenticator,
  AmplifyAuthContainer,
  AmplifySignIn,
  AmplifySignUp
} from '@aws-amplify/ui-react';
import { onAuthUIStateChange } from '@aws-amplify/ui-components';
import { connect, useDispatch } from 'react-redux';
import StationPanel from './Panels/StationPanel';
import YouTubeResourcePanel from './Panels/YouTubeResourcePanel';
import ActivityPanel from './Panels/ActivityPanel';
import ScheduledTrainPanel from './Panels/ScheduledTrainPanel';
import FormatPanel from './Panels/FormatPanel';
import { NTPage, NTSection } from '../../components/layoutComponents';
import { TabContainer } from '../../components/styledComponents';
import LongMessagePanel from './Panels/LongMessagePanel';
import { calculateLoginStatus } from '../../utils';
import { setLoginStatus } from '../../redux/reducers/settingsReducer';
import { USER_STATES } from '../../constants';

function AdminPage(props) {
  const { loginStatus } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthUIStateChange((nextAuthState, authData) => {
      dispatch(setLoginStatus(calculateLoginStatus(authData, nextAuthState)));
    });
  }, []);

  return (
    <NTPage>
      {loginStatus === USER_STATES.UNAUTH ? (
        <AmplifyAuthContainer>
          <AmplifyAuthenticator>
            <AmplifySignIn slot="sign-in" headerText="Nice Train Admin" />
            <AmplifySignUp
              slot="sign-up"
              formFields={[
                { type: 'username' },
                { type: 'password' },
                { type: 'email' }
              ]}
            />
          </AmplifyAuthenticator>
        </AmplifyAuthContainer>
      ) : (
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
      )}
    </NTPage>
  );
}

const mapStateToProps = (state) => ({
  loginStatus: state.settings.loginStatus
});

export default connect(mapStateToProps)(AdminPage);
