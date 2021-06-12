import React from 'react'
import { useState, useEffect } from 'react';
import styles from './ShowPopularMoviesHomepage.module.scss';
import ShowMovieGenres from './ShowMovieGenres';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ShowPopularMoviesHomepage = () => {
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

  const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

  return (
    <div className={styles.homepagePopularMovies}>
      {movies.slice(0, 4).map((m) =>
        <div className={styles.homepagePopularMoviesMovie} key={m.id} >
          <StyledLink to={`movies/${m.id}`} >
            <img src={`https://image.tmdb.org/t/p/original/${m.poster_path}`} alt={m.original_title} />
            <p className={styles.originalTitle}>{m.original_title}</p>
          </StyledLink>
          <div className={styles.genreLinkWrap}>
            {m.genre_ids.map((g, i) => <ShowMovieGenres key={i} genreId={g} />)}
          </div>
        </div>
      )}
    </div>
  )
}

export default ShowPopularMoviesHomepage
