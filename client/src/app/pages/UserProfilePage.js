import React, { useState, useEffect } from 'react'
import { useAuth } from "../contexts/firebase/auth.context";
import { BaseLayout } from '../layouts';
import styles from './UserProfilePage.module.scss';
import { Router, Redirect } from "react-router-dom";
import firebase from 'firebase/app';


const UserProfilePage = () => {


  const { currentUser, signOut } = useAuth();


  const [projects, setProjects] = useState([])

  // const firebaseApp = firebase.registerVersion;
  const db = firebase.firestore();

  const fetchBlogs = async () => {
    const response = db.collection('projects');
    const data = await response.get();
    data.docs.forEach(item => {
      setProjects([...projects, item.data()])
    })
  }

  useEffect(() => {
    fetchBlogs();
  }, [])


  if (!currentUser) {
    return (<Redirect to={'/'} />);
  } else {
    return (
      <BaseLayout>
        {/* {Router.browserHistory.push('/')} */}
        <div className={styles.userPage}>
          <img src={currentUser.photoURL} alt="" />
          <div className={styles.userPage__content}>
            <p>{!currentUser.displayName ? 'no username' : currentUser.displayName}</p>
            <p>{!currentUser.email ? 'no email' : currentUser.email}</p>
            <p>{!currentUser.phoneNumber ? 'no phone number' : currentUser.phoneNumber}</p>
            <p>{currentUser.uid}</p>
          </div>
        </div>
        <span>watchlist component here</span>
        {projects.map(b => <p>{b.title}</p>)}
      </BaseLayout>
    );
  }

}

export default UserProfilePage


