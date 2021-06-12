import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from "../../contexts/firebase/auth.context";
import styles from './ProfileNavigation.module.scss';

const ProfileNavigation = () => {
  const { currentUser, signOut } = useAuth();

  return (
    <nav className={styles.profileNavigation}>
      <ul>
        <li>
          <Link to='/profile' >view profile</Link>
        </li>
        <li>
          <button onClick={signOut}>Logout</button>
        </li>
      </ul>
    </nav>
  )
}
export default ProfileNavigation
