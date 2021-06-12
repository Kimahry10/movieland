import React, { useState, } from 'react'
import { useAuth } from "../contexts/firebase/auth.context";
import { BaseLayout } from '../layouts';
import styles from './UserProfilePage.module.scss';
import { Redirect } from "react-router-dom";
import { Helmet } from 'react-helmet';
const UserProfilePage = () => {

  const { currentUser, signOut } = useAuth();

  if (!currentUser) {
    return (<Redirect to={'/'} />);
  } else {
    return (

      <BaseLayout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Movieland | Profile {currentUser.email}</title>
          <meta name="Movieland profilepage" content="profile page" />
        </Helmet>
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
        </div>
      </BaseLayout>
    );
  }

}

export default UserProfilePage


