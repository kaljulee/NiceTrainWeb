import React, { useEffect } from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
// import { Authenticator, SignIn } from 'aws-amplify-react';
import { connect, useSelector, useDispatch } from 'react-redux';
import NiceTrainPage from '../NiceTrainPage';
import {
  fetchStations,
  fetchYouTubeResources
} from '../../redux/reducers/baseReducer';

function AdminPage(props) {
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
      <div style={{ width: '100%', height: '10vh' }}>admin page</div>
      <AmplifySignOut />
    </NiceTrainPage>
  );
}

export default withAuthenticator(AdminPage);
