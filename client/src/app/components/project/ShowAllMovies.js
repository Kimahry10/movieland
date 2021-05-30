import React from 'react'
import ShowAllPopularMovies from './ShowAllPopularMovies'
import ShowAllTopRatedMovies from './ShowAllTopRatedMovies'
import ShowsAllUpcomingMovies from './ShowAllUpcomingMovies';

const ShowAllMovies = (props) => {
  return (
    <>
      {props.filter === 'popular' && <ShowAllPopularMovies />}
      {props.filter === 'top_rated' && <ShowAllTopRatedMovies />}
      {props.filter === 'upcoming' && <ShowsAllUpcomingMovies />}
    </>
  )
}

export default ShowAllMovies
