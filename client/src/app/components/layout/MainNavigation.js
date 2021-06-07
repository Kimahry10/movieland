import {
  Link
} from "react-router-dom";

import * as Routes from '../../routes';
import { useAuth } from '../../contexts/firebase/auth.context';

// import styles from './MainNavigation.module.scss';

const MainNavigation = () => {
  const { currentUser, signOut } = useAuth();

  return (
    <ul>
      <li>
        <Link to={Routes.LANDING}>Home</Link>
      </li>
      {/* <li>
        <Link to={Routes.REVIEWPAGE}>Reviews</Link>
      </li> */}
      <li>
        <Link to={Routes.POPULAR}>Movies / Series</Link>
      </li>
      <li>
        <Link to={Routes.WATCHLIST}>Watchlist</Link>
      </li>
      {/* <li>
        {currentUser && <Link to={Routes.USERPROFILEPAGE}>Profile page</Link>}
      </li> */}
    </ul>
  );
};

export default MainNavigation;