import React, { useEffect, useState } from 'react'


const GetCastFromMovie = (props) => {


  useEffect(() => {
    fetchCast();
  }, [])



  const [cast, setCast] = useState([]);

  const fetchCast = async () => {
    const displayMovie = await fetch(`https://api.themoviedb.org/3/movie/${props.castId}/credits?api_key=7598462be8b94fc1e04d0e6dd30a782e&language=en-US`)
    const cast = await displayMovie.json();
    setCast(cast.cast)
    console.log(cast.cast)

    cast.cast.map(c => console.log(c.name))
  }


  return (
    <div>
          <h2>Cast:</h2>
      {cast.map(c => 
          <p>{c.name}</p>
      )}
    </div>
  )
}

export default GetCastFromMovie
