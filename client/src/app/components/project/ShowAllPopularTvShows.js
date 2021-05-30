import React from 'react'
import { useState, useEffect } from 'react';
import styles from './ShowAllMovies.module.scss';
import ShowMovieGenres from './ShowMovieGenres';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ShowAllPopularTvShows = (props) => {
  const key = "7598462be8b94fc1e04d0e6dd30a782e";

  const [movies, setMovies] = useState([])


  const fetchPopularMovies = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`)
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
    <div className={styles.allPopularMovies}>
      {movies.map((m) =>
        <div className={styles.allPopularMoviesMovie} >
          <StyledLink to={`tvshows/${m.id}`} key={m.id}>
            <img src={`https://image.tmdb.org/t/p/original/${m.poster_path}`} alt={m.original_title} loading='lazy'/>
            <p class={styles.name}>{m.name}</p>
          </StyledLink>
          <div className={styles.genreLinkWrap}>
            {m.genre_ids.map(g => <ShowMovieGenres genreId={g} />)}
          </div>
        </div>
      )}
    </div>
  )
}

export default ShowAllPopularTvShows
