import React, { useEffect, useState } from 'react';
import {
  AmplifySignOut,
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
} from '../../redux/reducers/baseReducer';

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
  const youTubeResources = useSelector((state) => state.youTubeResources);
  const stations = useSelector((state) => state.stations);
  console.log('YTR');
  console.log(youTubeResources);
  console.log('stations');
  console.log(stations);

  useEffect(() => {
    dispatch(fetchYouTubeResources());
  }, []);
  useEffect(() => {
    dispatch(fetchStations());
  }, []);

  return (
    <NiceTrainPage>
      {authState === AuthState.SignedIn && user ? (
        <div>
          <div style={{ width: '100%', height: '10vh' }}>admin page</div>
          <AmplifySignOut />
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
