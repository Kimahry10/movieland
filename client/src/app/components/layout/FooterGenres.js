import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import styles from './FooterGenres.module.scss';

const FooterGenres = () => {

  const key = "7598462be8b94fc1e04d0e6dd30a782e";

  const [genres, setGenres] = useState([])

  const fetchTrailers = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`)
    const genre = await data.json();
    setGenres(genre)
  }
  useEffect(() => {
    fetchTrailers();
  }, [])

  return (
    <ul className={styles.footerList}>
      {
        genres.genres && genres.genres.map((g, i) =>
          <li key={i}>
            <Link to='#'>
              {g.name}
            </Link>
          </li>
        )
      }
    </ul>
  )
}

export default FooterGenres
