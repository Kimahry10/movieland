import React from 'react'
import { useState, useEffect } from 'react';


const ShowTrailers = () => {

  const key = "7598462be8b94fc1e04d0e6dd30a782e";

  const [trailers, setTrailers] = useState([])

  const fetchTrailers = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/550/videos?api_key=${key}&language=en-US`)
    const trailer = await data.json();
    setTrailers(trailer.results)
  }
  useEffect(() => {
    fetchTrailers();
  }, [])

  return (
    <div>
      trailers here
    </div>
  )
}

export default ShowTrailers