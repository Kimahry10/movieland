import React, { useEffect, useState } from 'react'
import styles from './GetCastFromMovie.module.scss';


const GetCastFromMovie = (props) => {


    useEffect(() => {
        fetchCast();
    }, [])



    const [cast, setCast] = useState([]);

    const fetchCast = async () => {
        const displayMovie = await fetch(`https://api.themoviedb.org/3/movie/${props.castId}/credits?api_key=7598462be8b94fc1e04d0e6dd30a782e&language=en-US`)
        const cast = await displayMovie.json();
        setCast(cast.cast)
    }


    return (
        <div className={styles.getCastFromMovie}>
            <h2>Cast:</h2>
            {cast.map(c =>
                <span>{c.name}</span>
            )}
        </div>
    )
}

export default GetCastFromMovie
