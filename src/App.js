import './App.css';
import React from 'react';
import { BreakpointProvider, setDefaultBreakpoints } from 'react-socks';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import SchedulePage from './pages/SchedulePage';
import { niceTrainTheme } from './styles/colors';
import { settableBreakpoints } from './styles/breakpoints';
import { store } from './redux/store';
import AdminPage from './pages/AdminPage';
import TopNav from './components/TopNav';
import FourOhFourPage from './pages/FourOhFourPage';
import PatchesGalleryPage from './pages/PatchesGalleryPage';
import ViewContainer from './components/ViewContainer';

const Version = styled.div`
  position: fixed;
  font-family: helvetica;
  font-size: 10px;
  color: ${(p) => p.theme.accent};
  opacity: 0.4;
  bottom: 0;
  right: 0;
  padding: 4px 4px;
`;

function App() {
  setDefaultBreakpoints(settableBreakpoints());
  return (
    <Provider store={store}>
      <ThemeProvider theme={niceTrainTheme}>
        <BreakpointProvider
          style={{
            id: 'app-container',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Version>v1.3</Version>
          <Router>
            <ViewContainer>
              <TopNav />
              <Switch style={{ gridArea: 'body' }}>
                <Route path='/schedule'>
                  <SchedulePage />
                </Route>
                <Route exact path='/patches'>
                  <PatchesGalleryPage />
                </Route>
                <Route exact path='/admin'>
                  <AdminPage />
                </Route>
                <Route exact path='/'>
                  <Redirect to='/schedule' />
                </Route>
                <Route
                  exact
                  path='/test'
                  component={() => {
                    // eslint-disable-next-line no-undef
                    window.location.href = `https://dev.dnodsa1pfs3qf.amplifyapp.com`;
                  }}
                />
                <Route component={FourOhFourPage} />
              </Switch>
            </ViewContainer>
          </Router>
        </BreakpointProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
