import React from 'react'
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import styles from './ShowTrailers.module.scss';


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
    <div className={styles.trailer}>
      {
        trailers.map(t =>
          <>
            <iframe src={`https://www.youtube.com/watch?v=${t.key}`} title={t.name}></iframe>
          </>
        )
      }
    </div>
  )
}

export default ShowTrailers