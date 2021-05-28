import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import styles from './ShowPopularMovies.module.scss';
import ShowMovieGenres from './ShowMovieGenres';


const ShowPopularMovies = () => {
    const key = "7598462be8b94fc1e04d0e6dd30a782e";

    const [movies, setMovies] = useState([])



    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`)
            .then(res => {
                setMovies(res.data.results)
                console.log(res.data.results)
                res.data.results.map(r => console.log(r.genre_ids))
            })
    }, [movies.length])

    return (
        <div className={styles.homepagePopular}>
            <h2>Popular</h2>
            <div className={styles.homepagePopularMovies}>
                {movies.slice(0, 4).map(m =>
                    <div className={styles.homepagePopularMoviesMovie}>
                        <a href='#' key={m.id}>
                            <img src={`https://image.tmdb.org/t/p/original/${m.poster_path}`} />
                        </a>
                        <p>{m.original_title}</p>
                        <div className={styles.genreLinkWrap}>
                            {m.genre_ids.map(g => <ShowMovieGenres genreId={g} />)}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ShowPopularMovies
