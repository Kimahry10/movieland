import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'

const ShowMovieGenres = (props) => {
  const key = "7598462be8b94fc1e04d0e6dd30a782e";

  const [allGenres, setAllGenres] = useState([])


  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`)
      .then(res => {
        setAllGenres(res.data.genres)
        console.log(res.data.genres)
        // res.data.genres.map(g => console.log(typeof(g.id)))
      })
  }, [allGenres.length])

  return (
    <>
      {
        allGenres.map(g =>
          props.genreId == g.id ? <a href={g.name}>{g.name}</a> : ''
        )
      }
    </>
  )
}

export default ShowMovieGenres
