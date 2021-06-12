import React, { useState, useEffect } from 'react'
import { db } from '../utilities/firebase';
import { useAuth } from "../contexts/firebase/auth.context";
import { BaseLayout } from '../layouts';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';



const Watchlist = () => {
  const key = '7598462be8b94fc1e04d0e6dd30a782e';

  useEffect(() => {
    // showWatchlist();
    fetchPopularMovies();
  }, [])

  const [watchlist, setWatchlist] = useState([])
  const { currentUser, signOut } = useAuth();

  const fetchPopularMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/550?api_key=${key}&language=en-US`
    );
    const items = await data.json();
    // setMovies(items.results);
    // console.log(items.original_title)
  };

  if (currentUser) {
    // const showWatchlist = () => {
      db.collection('watchlists')
        .get()
        .then(snapshot => {
          const movieIds = []
          snapshot.forEach(doc => {
            const watchlistData = doc.data();
            if (watchlistData.userId === currentUser.uid) {
              movieIds.push(watchlistData)
              setWatchlist(movieIds)
            }
          })
        })
    // }

  }
  


  return (
    <BaseLayout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Movieland | Watchlist </title>
        <meta name="Movieland watchlist" content="watchlist" />
      </Helmet>
    {
      currentUser ? 
          watchlist.map(w =>
            w.movieId.map(id => <p>{id}</p>)
          )
          : <p>Please sign in to watch your watchlists. <Link to='/auth/signin'>Sign in</Link></p>
    }
    </BaseLayout>
  )
}

export default Watchlist
