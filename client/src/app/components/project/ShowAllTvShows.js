import React from 'react'
import ShowAllPopularTvShows from './ShowAllPopularTvShows'
import ShowAllTopRatedTvShows from './ShowAllTopRatedTvShows'
// import ShowsAllUpcomingMovies from './ShowAllUpcomingMovies';

const ShowAllTvShows = (props) => {
  // if props.filter === x show comonent
  // <ShowAllPopularMovies />
  // <ShowAllTopRatedMovies />
  // <ShowsAllUpcomingMovies />
  const checkFilter = () => {
    if (props.filter === 'popular') {
      // <ShowAllPopularMovies />
    }
  }
  return (
    <>
      {props.filter === 'popular' && <ShowAllPopularTvShows />}
      {props.filter === 'top_rated' && <ShowAllTopRatedTvShows />}
      {props.filter === 'upcoming' && <h2>No upcoming Tv shows</h2>}
    </>
  )
}

export default ShowAllTvShows