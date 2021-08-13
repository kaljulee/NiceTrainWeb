import './App.css';
import React, { useEffect } from 'react';
import { BreakpointProvider, setDefaultBreakpoints } from 'react-socks';
import { Provider, connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
// import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import SchedulePage from './pages/SchedulePage';
import colors from './styles/colors';
import { settableBreakpoints } from './styles/breakpoints';
import { store } from './redux/store';
// import AdminPage from './pages/AdminPage';
import TopNav from './components/TopNav';
import FourOhFourPage from './pages/FourOhFourPage';
import PatchesGalleryPage from './pages/PatchesGalleryPage';

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
            <Route exact path="/patches">
              <PatchesGalleryPage />
            </Route>
            <Route exact path="/">
              <Redirect to="/schedule" />
            </Route>
            <Route component={FourOhFourPage} />
          </Switch>
        </Router>
      </BreakpointProvider>
    </Provider>
  );
}

export default App;
