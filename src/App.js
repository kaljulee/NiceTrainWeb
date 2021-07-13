import './App.css';
import React from 'react';
import { BreakpointProvider, setDefaultBreakpoints } from 'react-socks';
import SchedulePage from './pages/SchedulePage';
import colors from './styles/colors';
import { settableBreakpoints } from './styles/breakpoints';

function App() {
  setDefaultBreakpoints(settableBreakpoints());
  return (
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
  );
}

export default App;
