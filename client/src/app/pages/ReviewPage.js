import { BaseLayout } from '../layouts'
import React, { useState, useEffect } from 'react'
import { Router, Redirect, Link } from "react-router-dom";
import firebase, { db, auth } from '../utilities/firebase';
import { useAuth } from "../contexts/firebase/auth.context";
import styled from './ReviewPage.module.scss';
import 'bootstrap/dist/css/bootstrap.css';

const Reviews = () => {

  const { currentUser, signOut } = useAuth();

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

  if (currentUser) {
    return (
      <BaseLayout>
        <div className="page page--sign-up">
          <div className="container">
            <div className="row">
              <div className="col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6 ">
                <h1 className='mt-5 mb-5 text-center'>Write a review</h1>
                <form className={`className='d-flex flex-column' ${styled.reviewForm}`} onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className='w-100' htmlFor="movietitle">
                      movie: <input className="form-control" type="text" name='movietitle' id='movietitle' value={movieTitle} onChange={(e) => setMovieTitle(e.target.value)} />
                    </label>
                  </div>
                  <div className="form-group">
                    <label className='w-100' htmlFor="heading">
                      heading: <input className="form-control" type="text" name='heading' id='heading' value={movieHeading} onChange={(e) => setMovieHeading(e.target.value)} />
                    </label>
                  </div>
                  <div className="form-group">
                    <label className='w-100' htmlFor="review">
                      review: <textarea className="form-control" name="review" id="review" cols="30" rows="10" value={movieReview} onChange={(e) => setMovieReview(e.target.value)}></textarea>
                    </label>
                  </div>
                  <input className="btn btn-primary w-100" type="submit" value="submit review" />
                </form>
              </div>
            </div>
          </div>
        </div >
      </BaseLayout >
    )
  } else {
    return (
      <BaseLayout>
        <p>Please sign in to write a review. <Link to='/auth/signin'>Sign in</Link></p>
      </BaseLayout>
    )
  }
  
}

export default Reviews