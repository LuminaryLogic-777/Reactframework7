import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  f7,
  f7ready,
  App,
  Panel,
  View,
  Popup,
  Page,
  Navbar,
  NavRight,
  Link,
  Block,
  LoginScreen,
  LoginScreenTitle,
  List,
  ListInput,
  ListButton,
  BlockFooter
} from 'framework7-react';

import routes from './js/routes';
import store from './js/store';

// Import your pages/components
import HomePage from './pages/home.jsx';
import AboutPage from './pages/about.jsx';
import FormPage from './pages/form.jsx';
import CollectionPage from './pages/Collection.jsx';
import ChooseCity from './pages/ChooseCity.jsx';
import NotFoundPage from './pages/404.jsx';

const MyApp = () => {
  // Login screen demo data
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Framework7 Parameters
  const f7params = {
    name: 'Best5', // App name
    theme: 'auto', // Automatic theme detection

    // App store
    store: store,
    // App routes
    routes: routes,

    // Register service worker (only on production build)
    serviceWorker: process.env.NODE_ENV === 'production' ? {
      path: '/service-worker.js',
    } : {},
  };

  const alertLoginData = () => {
    f7.dialog.alert('Username: ' + username + '<br>Password: ' + password, () => {
      f7.loginScreen.close();
    });
  };

  f7ready(() => {
    // Call F7 APIs here
  });

  return (
    <Router>
      <App {...f7params}>
        {/* Left panel with cover effect */}
        <Panel left cover dark>
          <View>
            <Page>
              <Navbar title="Left Panel" />
              <Block>Left panel content goes here</Block>
            </Page>
          </View>
        </Panel>

        {/* Right panel with reveal effect */}
        <Panel right reveal dark>
          <View>
            <Page>
              <Navbar title="Right Panel" />
              <Block>Right panel content goes here</Block>
            </Page>
          </View>
        </Panel>

        {/* Main View */}
        <View main className="safe-areas">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/collections" element={<CollectionPage />} />
            <Route path="/city" element={<ChooseCity />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </View>

        {/* Popup */}
        <Popup id="my-popup">
          <View>
            <Page>
              <Navbar title="Popup">
                <NavRight>
                  <Link popupClose>Close</Link>
                </NavRight>
              </Navbar>
              <Block>
                <p>Popup content goes here.</p>
              </Block>
            </Page>
          </View>
        </Popup>

        {/* Login Screen */}
        <LoginScreen id="my-login-screen">
          <View>
            <Page loginScreen>
              <LoginScreenTitle>Login</LoginScreenTitle>
              <List form>
                <ListInput
                  type="text"
                  name="username"
                  placeholder="Your username"
                  value={username}
                  onInput={(e) => setUsername(e.target.value)}
                />
                <ListInput
                  type="password"
                  name="password"
                  placeholder="Your password"
                  value={password}
                  onInput={(e) => setPassword(e.target.value)}
                />
              </List>
              <List>
                <ListButton title="Sign In" onClick={() => alertLoginData()} />
                <BlockFooter>
                  Some text about login information.<br />Click "Sign In" to close Login Screen
                </BlockFooter>
              </List>
            </Page>
          </View>
        </LoginScreen>
      </App>
    </Router>
  );
};

export default MyApp;
