import './App.css';
import React, { useEffect } from 'react';
import { BreakpointProvider, setDefaultBreakpoints } from 'react-socks';
import { Provider, connect } from 'react-redux';
import Amplify from 'aws-amplify';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SchedulePage from './pages/SchedulePage';
import colors from './styles/colors';
import { settableBreakpoints } from './styles/breakpoints';
import { store } from './redux/store';
import awsconfig from './aws-exports';
import AdminPage from './pages/AdminPage';
import LandingPage from './pages/LandingPage';
import TopNav from './components/TopNav';
import FourOhFourPage from './pages/FourOhFourPage';

Amplify.configure(awsconfig);

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
        <Router>
          <TopNav />
          <Switch>
            <Route path="/schedule">
              <SchedulePage />
            </Route>
            <Route path="/admin">
              <AdminPage />
            </Route>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route component={FourOhFourPage} />
          </Switch>
        </Router>
      </BreakpointProvider>
    </Provider>
  );
}

export default App;
