import React, { useState, } from 'react'
import { useAuth } from "../contexts/firebase/auth.context";
import { BaseLayout } from '../layouts';
import styles from './UserProfilePage.module.scss';
import { Redirect } from "react-router-dom";
// import Watchlist from './Watchlist';
// import { db, } from '../utilities/firebase';
// import faker from 'faker';

const UserProfilePage = () => {

  const { currentUser, signOut } = useAuth();

  if (!currentUser) {
    return (<Redirect to={'/'} />);
  } else {
    return (

      <BaseLayout>
        <div className={styles.userPage}>

          <div className={styles.userPage__content}>
            <img src={currentUser.photoURL} alt="" />
            <div className={styles.userPage__content__userInfo}>
              <p>{!currentUser.displayName ? 'no username' : currentUser.displayName}</p>
              <p>{!currentUser.email ? 'no email' : currentUser.email}</p>
              <p>{!currentUser.phoneNumber ? 'no phone number' : currentUser.phoneNumber}</p>
              <p>{currentUser.uid}</p>
            </div>
          </div>
          {/* <Watchlist /> */}

        </div>
      </BaseLayout>
    );
  }

}

export default UserProfilePage


