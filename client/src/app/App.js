import { AuthProvider, FirebaseProvider, FirestoreProvider } from './contexts/firebase';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import * as Routes from './routes';

import styles from './App.module.scss';

import { HomePage, ProjectPage, ProjectsPage, SignInPage, MovieDetailPage } from './pages';

function App() {
  return (
    <div className={styles.app}>
      <FirebaseProvider>
        <AuthProvider>
          <FirestoreProvider>
            <Router basename={'react-firebase-boilerplate'}>
              <Switch>
                  <Route exact path={Routes.LANDING} component={ HomePage }/>
                  <Route from={Routes.HOME} to={Routes.LANDING}/>
                  <Route exact path={Routes.PROJECT_DETAILS} component={ ProjectPage }/>
                  <Route exact path={Routes.PROJECTS} component={ ProjectsPage }/>
                <Route exact path={Routes.AUTH_SIGN_IN} component={SignInPage} />
                <Route exact path={Routes.MOVIE_DETAILS} component={MovieDetailPage }/>
              </Switch>
            </Router>
          </FirestoreProvider>
        </AuthProvider>
      </FirebaseProvider>
    </div>
  );
}

export default App;
