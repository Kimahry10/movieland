import React, { useState, useEffect } from 'react'
import { useAuth } from "../contexts/firebase/auth.context";
import { BaseLayout } from '../layouts';
import styles from './UserProfilePage.module.scss';
import { Router, Redirect } from "react-router-dom";
import firebase, {db, auth} from '../utilities/firebase';
import faker from 'faker';

const UserProfilePage = () => {

    // const dbase = firebase.firestore()
    // const auth = firebase.auth()
    const { currentUser, signOut } = useAuth();

    const [projects, setProjects] = useState([])

    db.collection("reviews").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
        });
    });

    //     var reviewsRef = await firebase.firestore().collection("reviews")
    //         .doc('f93da868-13d6-4a3b-9e4e-da251b77a776').collection('reviews').get()

    //     reviewsRef.doc(currentUser.uid).set({
    //       movieId: 123,
    //       review: faker.lorem.paragraph(),
    //       userId: currentUser.uid
    //     });
    //     .get()
    //     console.log(reviewsRef)

        // db.collection('reviews').get().then(snapshot => {
        //     console.log(snapshot)
        // })
    //         .catch(error => console.log(error))





    if (!currentUser) {
        return (<Redirect to={'/'} />);
    } else {
        return (

            <BaseLayout>
                {/* <button onClick={test}>click me</button> */}
                {/* {Router.browserHistory.push('/')} */}
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
                    <h2>watchlist component here</h2>

                </div>
                {
                    projects && projects.map(p => {
                        return(
                            <p>{p.review}</p>
                        )
                    })
                }
            </BaseLayout>
        );
    }

}

export default UserProfilePage


