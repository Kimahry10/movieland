import { useState } from 'react';

import { AuthProvider, FirebaseProvider, FirestoreProvider } from './contexts/firebase';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import * as Routes from './routes';

import styles from './App.module.scss';

import { HomePage, ProjectPage, ProjectsPage, SignInPage, SignUpPage, MovieDetailPage, TvShowDetailPage, Popular, UserProfilePage, ForgotPasswordPage, ReviewPage, Watchlist, Search } from './pages';

import {ThemeContext} from '../lib/context'

/**
 * light/dark mode
 * react helmet
 * storybooks
 * testing
 * deploy!
 */

function App() {

  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>

      <div className={styles.app} data-theme={theme}>
        <FirebaseProvider>
          <AuthProvider>
            <FirestoreProvider>
              <Router basename={'movieland'}>
                <Switch>
                  <Route exact path={Routes.LANDING} component={HomePage} />
                  <Route from={Routes.HOME} to={Routes.LANDING} />
                  <Route exact path={Routes.PROJECT_DETAILS} component={ProjectPage} />
                  <Route exact path={Routes.PROJECTS} component={ProjectsPage} />
                  <Route exact path={Routes.AUTH_SIGN_IN} component={SignInPage} />
                  <Route exact path={Routes.MOVIE_DETAILS} component={MovieDetailPage} />
                  <Route exact path={Routes.TVSHOW_DETAILS} component={TvShowDetailPage} />
                  <Route exact path={Routes.POPULAR} component={Popular} />
                  <Route exact path={Routes.SEARCH} component={Search} />
                  <Route exact path={Routes.USERPROFILEPAGE} component={UserProfilePage} />
                  <Route exact path={Routes.REVIEWPAGE} component={ReviewPage} />
                  <Route exact path={Routes.FORGOTPASSWORD} component={ForgotPasswordPage} />
                  <Route exact path={Routes.SIGNUP} component={SignUpPage} />
                  <Route exact path={Routes.WATCHLIST} component={Watchlist} />
                </Switch>
              </Router>
            </FirestoreProvider>
          </AuthProvider>
        </FirebaseProvider>
      </div>

    </ThemeContext.Provider>

  );
}

export default App;
