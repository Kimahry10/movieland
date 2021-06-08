import React, { useEffect, useState } from 'react'
// import { BaseLayout } from '../layouts';
import styles from './MovieDetailPage.module.scss';
import ShowMovieGenres from '../components/project/ShowMovieGenres';

import GetCastFromMovie from '../components/project/GetCastFromMovie';
import { Link } from "react-router-dom";

import firebase, { db, auth } from '../utilities/firebase';
import { useAuth } from "../contexts/firebase/auth.context";

import { BaseLayout } from '../layouts'
import styled from './ReviewPage.module.scss';


const MovieDetailPage = ({ match }) => {

  useEffect(() => {
    fetchMovie();
    showReviews();
  }, [])


  const { currentUser, signOut } = useAuth();
  const [movieTitle, setMovieTitle] = useState()
  const [movieHeading, setMovieHeading] = useState()
  const [movieReview, setMovieReview] = useState()
  const [movieRating, setMovieRating] = useState()
  const [movie, setMovie] = useState({});

  // sends data to database
  const handleSubmit = (e) => {
    db.collection('reviews_movies').add({
      // movieTitle: movie.original_title,
      movieId: match.params.id,
      heading: movieHeading,
      rating: movieRating,
      movieReview: movieReview,
      userId: currentUser.uid,
      date: Date.now()
    })
      .then(() => {
        alert('message submitted')
      })
      .catch(error => {
        alert(error.message)
      })

    e.preventDefault();
  }

  // write review to db
  const [reviewDb, setreviewDb] = useState([])
  const showReviews = async () => {
    db.collection("reviews_movies").where("movieId", "==", match.params.id)
      .get()
      .then((querySnapshot) => {
        const reviews = []
        querySnapshot.forEach((doc) => {
          const data = doc.data()
          reviews.push(data)
        });
        setreviewDb(reviews)
      })
  }

  const fetchMovie = async () => {
    const displayMovie = await fetch(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=7598462be8b94fc1e04d0e6dd30a782e&language=en-US`)
    const movie = await displayMovie.json();
    setMovie(movie)
  }
  const genres = movie.genres


  const movieDetailStyling = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }

  const styledLink = {
    color: '#fff',
    margin: '1rem 0',
  }


  const handleOnChange = (e) => {
    const value = e.target.value;
    setMovieRating(value)
  }


  return (
    <BaseLayout>
      <div style={movieDetailStyling}>
        <div className={styles.linkAndMovieDetailContent}>
          <Link style={styledLink} to='/'>Back to homepage</Link>
          <div>
            <h1>{movie.original_title}</h1>
            <p>{movie.overview}</p>
            <p className={styles.rating}>Rating: {movie.vote_average}({movie.vote_count})</p>
            <GetCastFromMovie castId={match.params.id} />
            {
              movie.genres && movie.genres.map((g, i) => (
                <ShowMovieGenres genreId={g.id} key={i}/>
              ))
            }
            {/* {
              genres && genres.map(g => <p>{g.name}</p>)
            } */}
            <button>Add to watchlist</button>
          </div>
        </div>
      </div>

      {/* form */}
      {currentUser ?
        <div className="page page--sign-up">
          <div className="container">
            <div className="row">
              <div className="col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6 ">
                <h1 className='mt-5 mb-5 text-center'>Write a review</h1>
                <form className={`d-flex flex-column ${styled.reviewForm}`} onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className='w-100' htmlFor="heading">
                      heading: <input className="form-control" type="text" name='heading' id='heading' value={movieHeading} onChange={(e) => setMovieHeading(e.target.value)} />
                    </label>
                  </div>
                  <div className={`form-group ${styles.formMovieRating}` } onChange={handleOnChange}>

                    <label htmlFor="rating">1</label>
                    <input type="radio" name="rating"  value='1'/>

                    <label htmlFor="rating">2</label>
                    <input type="radio" name="rating"  value='2'/>

                    <label htmlFor="rating">3</label>
                    <input type="radio" name="rating" value='3' />

                    <label htmlFor="rating">4</label>
                    <input type="radio" name="rating" value='4' />

                    <label htmlFor="rating">5</label>
                    <input type="radio" name="rating" value='5' />

                    <label htmlFor="rating">6</label>
                    <input type="radio" name="rating" value='6' />

                    <label htmlFor="rating">7</label>
                    <input type="radio" name="rating" value='7' />

                    <label htmlFor="rating">8</label>
                    <input type="radio" name="rating" value='8' />

                    <label htmlFor="rating">9</label>
                    <input type="radio" name="rating" value='9' />

                    <label htmlFor="rating">10</label>
                    <input type="radio" name="rating" value='10' />

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
        :
        <p>Please sign in to write a review. <Link to='/auth/signin'>Sign in</Link></p>
      }
      <div className={styles.reviews}>
        <h2>reviews</h2>
        {
          reviewDb && reviewDb.map((review, i) => {
            return (
              <div className={styles.reviewContainer} key={i}>
                <h4>{review.heading}</h4>
                <span>Rated: {review.rating}/10</span>
                <small>posted on: {review.date} by: {review.userId}</small>
                <p>{review.movieReview}</p>
              </div>
            )
          })
        }
      </div>


    </BaseLayout >
  )
}

export default MovieDetailPage