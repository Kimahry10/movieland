import React, { useState } from 'react'
import { BaseLayout } from '../layouts';
import styles from './Search.module.scss';
import ShowMovieGenres from "../components/project/ShowMovieGenres";
import { Link } from 'react-router-dom'
import { db } from '../utilities/firebase';
import { useAuth } from "../contexts/firebase/auth.context";

const Search = () => {
  const { currentUser, signOut } = useAuth();

  const APIKey = '41c7070ca76d73624b7bbf96be9a1acd';

  const [inputValue, setInputValue] = useState();
  const [results, setResults] = useState([]);
  const [watchlist, setWatchlist] = useState([])

  const filterArray = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&query=${inputValue}`);
    const data = await response.json();
    console.log(data.results);
    setResults(data.results);
  }

  // const StyledLink = styles(Link)`
  //   text-decoration: none;

  //   &:focus,
  //   &:hover,
  //   &:visited,
  //   &:link,
  //   &:active {
  //     text-decoration: none;
  //   }
  // `;

  const loggedInButton = {
    background: 'green'
  }
  const loggedOutButton = {
    background: 'red'
  }
  // const [watchlist, setWatchlist] = useState([])
  const addToWatchlist = (movieId) => {
    setWatchlist([...watchlist, movieId])
    watchlist.forEach(w => {
      db.collection('watchlists').doc(currentUser.uid).set({
        movieId: watchlist,
        userId: currentUser.uid
      })
    })
  }
  return (
    <BaseLayout>
      <div className={styles.search}>
        <form onSubmit={filterArray}>
          <input placeholder='Search movie...' type="text" onChange={(e) => setInputValue(e.target.value)}></input>
          <button type="submit">search</button>
        </form>
        
        <div className={styles.allSearchResults}>
          {results.map(r =>
            <div className={styles.searchResults}>
              <Link to={`movies/${r.id}`} key={r.id}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${r.poster_path}`}
                  alt={r.originalTitle}
                  loading="lazy"
                />
                <p className={styles.originalTitle}>{r.original_title}</p>
              </Link>
              <div className={styles.genreLinkWrap}>
                {r.genre_ids.map((g, i) => (
                  <ShowMovieGenres genreId={g} key={i} />
                ))}
              </div>
              {/* <button style={currentUser ? loggedInButton : loggedOutButton} onClick={() => addToWatchlist(r.id)} >Add to watchlist</button> */}
            </div>
          )}
        </div>


      </div>
    </BaseLayout>
  )
}

export default Search