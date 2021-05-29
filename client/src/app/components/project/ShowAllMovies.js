import React from 'react'
import ShowAllPopularMovies from './ShowAllPopularMovies'
import ShowAllTopRatedMovies from './ShowAllTopRatedMovies'
import ShowsAllUpcomingMovies from './ShowAllUpcomingMovies';

const ShowAllMovies = (props) => {
    // if props.filter === x show comonent
  // <ShowAllPopularMovies />
  // <ShowAllTopRatedMovies />
  // <ShowsAllUpcomingMovies />
  const checkFilter = () => {
    if (props.filter === 'popular') {
       <ShowAllPopularMovies />
    }
  }
  return (
    <>
      {props.filter === 'popular' && <ShowAllPopularMovies />}
      {props.filter === 'top_rated' && <ShowAllTopRatedMovies />}
      {props.filter === 'upcoming' && <ShowsAllUpcomingMovies />}
    </>
  )
}

export default ShowAllMovies
