import './App.css';
import React from 'react';
import SchedulePage from './pages/SchedulePage';
import colors from './styles/colors';

function App() {
  return (
    <div
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
    </div>
  );
}

export default App;
