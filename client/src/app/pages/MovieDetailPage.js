import React, { useEffect, useState } from 'react'
import { BaseLayout } from '../layouts';
import styles from './MovieDetailPage.module.scss';
import GetCastFromMovie from '../components/project/GetCastFromMovie';


const MovieDetailPage = ({ match }) => {
    useEffect(() => {
        fetchMovie();
    }, [])

    

    const [movie, setMovie] = useState({});

    const fetchMovie = async () => {
        const displayMovie = await fetch(` https://api.themoviedb.org/3/movie/${match.params.id}?api_key=7598462be8b94fc1e04d0e6dd30a782e&language=en-US`)
        const movie = await displayMovie.json();
        setMovie(movie)

        console.log(movie)
    }

    return (
        <BaseLayout>
            <div class={styles.movieDetail}>
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
                <h1 >{movie.original_title}</h1>
                <p>{movie.overview}</p>
                <p>Rating: {movie.vote_average}({movie.vote_count})</p>
                <GetCastFromMovie castId={match.params.id}/>
                <button>Add to watchlist</button>
            </div>
        </BaseLayout>
    )
}

export default MovieDetailPage
