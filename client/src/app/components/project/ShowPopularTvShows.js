import React, { useState, useEffect } from 'react';
const ShowPopularTvShows = () => {
    const key = '7598462be8b94fc1e04d0e6dd30a782e';

    
    const fetchTvShows = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`)
        const items = await data.json();
    }
    useEffect(() => {
        fetchTvShows();
    }, [])

  return (
    <div>
      tv shows here
    </div>
  )
}

export default ShowPopularTvShows
