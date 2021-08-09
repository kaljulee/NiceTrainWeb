import './App.css';
import React, { useEffect } from 'react';
import { BreakpointProvider, setDefaultBreakpoints } from 'react-socks';
import { Provider } from 'react-redux';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import SchedulePage from './pages/SchedulePage';
import colors from './styles/colors';
import { settableBreakpoints } from './styles/breakpoints';
import store from './redux/store';
import awsconfig from './aws-exports';
import { createStation } from './graphql/mutations';
import { listStations } from './graphql/queries';

Amplify.configure(awsconfig);
// const todo = { name: 'my fist todo', description: 'hellow owrld' };
// console.log(API.graphql(graphqlOperation(listTodos)));

function App() {
  setDefaultBreakpoints(settableBreakpoints());
  useEffect(() => {
    console.log('in app UE, should happen only once');
    async function getStations() {
      if (true) {
        const response = await API.graphql(graphqlOperation(listStations));
        console.log('response');
        console.log(response.data.listStations.items);
      } else {
        console.log('trying to post');
        const station = { name: 'my fist station', abbrev: 'STN1' };
        console.log(
          API.graphql(graphqlOperation(createStation, { input: station }))
        );
        console.log('////');
      }
    }
    getStations();
  }, []);
  return (
    <Provider store={store}>
      <BreakpointProvider
        style={{
          id: 'app-container',
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.boardBack
        }}
      >
        <SchedulePage />
      </BreakpointProvider>
    </Provider>
  );
}

export default App;
