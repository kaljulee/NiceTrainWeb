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
import { createTodo, updateTodo, deleteTodo } from './graphql/mutations';
import { listTodos } from './graphql/queries';

Amplify.configure(awsconfig);
// const todo = { name: 'my fist todo', description: 'hellow owrld' };
// console.log(API.graphql(graphqlOperation(listTodos)));

function App() {
  setDefaultBreakpoints(settableBreakpoints());
  useEffect(() => {
    console.log('in app UE, should happen only once');
    async function getTodos() {
      const response = await API.graphql(graphqlOperation(listTodos));
      console.log('response');
      console.log(response.data.listTodos.items);
      console.log('////');
    }
    getTodos();
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
