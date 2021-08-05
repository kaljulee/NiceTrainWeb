import './App.css';
import React from 'react';
import { BreakpointProvider, setDefaultBreakpoints } from 'react-socks';
import { Provider } from 'react-redux';
import SchedulePage from './pages/SchedulePage';
import colors from './styles/colors';
import { settableBreakpoints } from './styles/breakpoints';
import store from './redux/store';

function App() {
  setDefaultBreakpoints(settableBreakpoints());
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
