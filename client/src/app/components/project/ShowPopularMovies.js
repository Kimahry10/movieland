import React from 'react'
import { useState, useEffect } from 'react';
import styles from './ShowPopularMovies.module.scss';
import ShowMovieGenres from './ShowMovieGenres';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Link} from 'react-router-dom';

const ShowPopularMovies = () => {
  const key = "7598462be8b94fc1e04d0e6dd30a782e";

  const [movies, setMovies] = useState([])

  const fetchPopularMovies = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`)
    const items = await data.json();
    setMovies(items.results)
  }
  useEffect(() => {
    fetchPopularMovies();
  }, [])
  return (
    <>
      <div className={styles.homepagePopularMovies}>
        {movies.slice(0, 4).map((m) =>
          <Link to={`movies/${m.id}`} key={m.id}>
            <div className={styles.homepagePopularMoviesMovie} >
              <img src={`https://image.tmdb.org/t/p/original/${m.poster_path}`} />
              <p>{m.original_title}</p>
              <div className={styles.genreLinkWrap}>
                {m.genre_ids.map(g => <ShowMovieGenres genreId={g} />)}
              </div>
            </div>
          </Link>
        )}
      </div>
      </>
  )
}

export default ShowPopularMovies
