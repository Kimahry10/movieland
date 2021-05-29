import React, { useEffect, useState } from 'react'
import { BaseLayout } from '../layouts';
import styles from './MovieDetailPage.module.scss';
import GetCastFromTvShow from '../components/project/GetCastFromTvShow';


const TvShowDetailPage = ({ match }) => {
  useEffect(() => {
    fetchTvShow();
  }, [])



  const [tvShow, setTvShow] = useState({});

  const fetchTvShow = async () => {
    const displayMovie = await fetch(`https://api.themoviedb.org/3/tv/${match.params.id}?api_key=7598462be8b94fc1e04d0e6dd30a782e&language=en-US`)
    const tvShow = await displayMovie.json();
    setTvShow(tvShow)

    console.log(tvShow)
  }

  return (
    <BaseLayout>
      <div class={styles.movieDetail}>
        <img src={`https://image.tmdb.org/t/p/original/${tvShow.poster_path}`} />
        <h1 >{tvShow.name}</h1>
        <p>{tvShow.overview}</p>
        <p>Rating: {tvShow.vote_average}({tvShow.vote_count})</p>
        <GetCastFromTvShow castId={match.params.id} />
        <button>Add to watchlist</button>
      </div>
    </BaseLayout>
  )
}

export default TvShowDetailPage
