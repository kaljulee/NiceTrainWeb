import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Amplify from 'aws-amplify';
import App from './App';
import reportWebVitals from './reportWebVitals';
import config from './aws-exports';
import { callListActivities } from './redux/thunks/activity';
import { store } from './redux/store';
import { callListStations } from './redux/thunks/station';
import { callListYouTubeResources } from './redux/thunks/youTubeResource';
import { callListScheduledTrains } from './redux/thunks/scheduledTrain';
import { callListFormats } from './redux/thunks/format';
import { callListScheduledActivities } from './redux/thunks/scheduledActivity';

Amplify.configure(config);

store.dispatch(callListActivities());
store.dispatch(callListStations());
store.dispatch(callListYouTubeResources());
store.dispatch(callListScheduledTrains());
store.dispatch(callListFormats());
store.dispatch(callListScheduledActivities());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // eslint-disable-next-line no-undef
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
