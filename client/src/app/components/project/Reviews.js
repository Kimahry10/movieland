import React, {useEffect, useState} from 'react'
import { db } from '../../utilities/firebase';
import styles from '../../pages/MovieDetailPage.module.scss';


const ReviewPage = (props) => {

  useEffect(() => {
    showReviews();
  }, [])



  const [reviewDb, setreviewDb] = useState([])
  const showReviews = async () => {
    db.collection(`reviews_${props.media}`).where(props.media === 'movies' ? 'movieId' : 'tvShowId' , "==", props.movieId)
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


  return (
    <div className={styles.reviews}>
      <h2>reviews</h2>
      {
        reviewDb && reviewDb.map((review, i) => {
          return (
            <div className={styles.reviewContainer} key={i}>
              <h4>{review.heading}</h4>
              <span>Rated: {review.rating}/10</span>
              <small>posted on: {review.date} by: {review.userId}</small>
              <p>{props.media === 'movie'? review.movieReview : review.tvShowReview}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default ReviewPage
