import { BaseLayout } from '../layouts'
import React, { useState, useEffect } from 'react'
import { Router, Redirect } from "react-router-dom";
import firebase, { db, auth } from '../utilities/firebase';
import { useAuth } from "../contexts/firebase/auth.context";
import styled from './ReviewPage.module.scss';


const Reviews = () => {

    const { currentUser, signOut } = useAuth();
    console.log(currentUser.uid)

    const [projects, setProjects] = useState([])

    const [movieTitle, setMovieTitle] = useState()
    const [movieHeading, setMovieHeading] = useState()
    const [movieReview, setMovieReview] = useState()
    

    // db.collection("reviews").get().then((querySnapshot) => {
    //   querySnapshot.forEach((doc) => {
    //     // doc.data() is never undefined for query doc snapshots
    //     console.log(doc.id, " => ", doc.data());
    //   });
    // });

    // var docRef = db.collection("reviews").doc('mortal combat')

    // docRef.get().then((doc) => {
    //     if (doc.exists) {
    //         console.log("Document data:", doc.data());
    //     }
    // })


    // sends data to database
    const handleSubmit = (e) => {
        db.collection('reviews').add({
            movieTitle: movieTitle,
            heading: movieHeading,
            movieReview: movieReview,
            userId: currentUser.uid
        })
        .then(() => {
            alert('message submitted')
        })
        .catch(error => {
            alert(error.message)
        })

        e.preventDefault();
    }

    return (
        <BaseLayout>
            <h2>Write a review</h2>

            <form className={styled.reviewForm} onSubmit={handleSubmit}>
                <label htmlFor="movietitle">
                    movie: <input type="text" name='movietitle' id='movietitle' value={movieTitle} onChange={(e) => setMovieTitle(e.target.value)} />
                </label>
                <label htmlFor="heading">
                    heading: <input type="text" name='heading' id='heading' value={movieHeading} onChange={(e) => setMovieHeading(e.target.value)} />
                </label>
                <label htmlFor="review">
                    review: <textarea name="review" id="review" cols="30" rows="10" value={movieReview} onChange={(e) => setMovieReview(e.target.value)}></textarea>
                </label>
                <input type="submit" value="submit review" />
            </form>
        </BaseLayout>
    )
}

export default Reviews




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
