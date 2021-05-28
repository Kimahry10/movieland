import React from 'react'
import { useState, useEffect } from 'react';
import styles from './ShowPopularMovies.module.scss';


const ShowMovieGenres = (props) => {
  const key = "7598462be8b94fc1e04d0e6dd30a782e";

  const [allGenres, setAllGenres] = useState([])

  const fetchGenres = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`);
    const items = await data.json();
    setAllGenres(items.genres)
  }
  useEffect(() => {
    fetchGenres();
  }, [])

  return (
    <>
      {
        allGenres.map((g, index) =>
          props.genreId === g.id ? <p className={styles.homepageGenres} key={index} href={g.name}>{g.name}</p> : ''
        )
      }
    </>
  )
}

export default ShowMovieGenres
