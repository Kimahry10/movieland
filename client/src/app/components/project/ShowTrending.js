import React, { useEffect, useState } from 'react'
import styles from './ShowTrending.module.scss';
import ShowMovieGenres from './ShowMovieGenres';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const ShowTrending = () => {
  useEffect(() => {
    fetchTrending();
  }, [])



  const [trendingArr, setTrendingArr] = useState([]);

  const fetchTrending = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=7598462be8b94fc1e04d0e6dd30a782e`)
    const trending = await data.json();
    setTrendingArr(trending.results)
  }

  const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    `

  return (
    <div className={styles.homepageTrending}>
      {trendingArr.slice(0, 4).map((t) =>
        <div className={styles.homepageTrendingMovie} >
          <StyledLink to={`movies/${t.id}`} key={t.id}>
            <img src={`https://image.tmdb.org/t/p/original/${t.poster_path}`} alt={t.originalTitle} />
            <p className={styles.originalTitle}>{t.original_title}</p>
          </StyledLink>
          <div className={styles.genreLinkWrap}>
            {t.genre_ids.map(g => <ShowMovieGenres genreId={g} />)}
          </div>
        </div>
      )}
    </div>
  )
}

export default ShowTrending
