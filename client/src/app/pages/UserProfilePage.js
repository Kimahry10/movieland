import React from 'react'
import { useAuth } from "../contexts/firebase/auth.context";
import { BaseLayout } from '../layouts';
import styles from './UserProfilePage.module.scss';
import { Router, Redirect } from "react-router-dom";



const UserProfilePage = () => {
    const { currentUser, signOut } = useAuth();

    console.log(currentUser)

        if (!currentUser) {
            return (<Redirect to={'/'} />);
        } else {
            return (
                <BaseLayout>
                    {/* {Router.browserHistory.push('/')} */}
                    <div className={styles.userPage}>
                        <img src={currentUser.photoURL} alt="" />
                        <div className={styles.userPage__content}>
                            {currentUser.displayName}
                            {currentUser.email}
                            {currentUser.phoneNumber}
                        </div>
                    </div>
                    <span>watchlist component here</span>
                </BaseLayout>
            );
        }
    
}

export default UserProfilePage
