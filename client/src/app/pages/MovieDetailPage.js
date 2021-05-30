import React, { useEffect, useState } from 'react'
import { BaseLayout } from '../layouts';
import styles from './MovieDetailPage.module.scss';
import GetCastFromMovie from '../components/project/GetCastFromMovie';
import { Link } from "react-router-dom";
import { StyleSheetManager } from 'styled-components';


const MovieDetailPage = ({ match }) => {
    useEffect(() => {
        fetchMovie();
    }, [])



    const [movie, setMovie] = useState({});

    const fetchMovie = async () => {
        const displayMovie = await fetch(` https://api.themoviedb.org/3/movie/${match.params.id}?api_key=7598462be8b94fc1e04d0e6dd30a782e&language=en-US`)
        const movie = await displayMovie.json();
        setMovie(movie)
    }

    const movieDetailStyling = {
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        // backgroundPosition: 'top',
        // height: '100vh'
    }

    const styledLink = {
        color: '#fff',
        margin: '1rem 0',
    }
    

    return (
        <div style={movieDetailStyling}>
            <div className={styles.linkAndMovieDetailContent}>
                <Link style={styledLink} to='/'>Back to homepage</Link>
                <div >
                    <h1>{movie.original_title}</h1>
                    <p>{movie.overview}</p>
                    <p className={styles.rating}>Rating: {movie.vote_average}({movie.vote_count})</p>
                    <GetCastFromMovie castId={match.params.id} />
                    <button>Add to watchlist</button>
                </div>
            </div>
        </div>
    )
}

export default MovieDetailPage