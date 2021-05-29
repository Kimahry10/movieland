import React from 'react'
import styles from './ShowPopularMoviesHomepage.module.scss';
import ShowPopularMoviesHomepage from './ShowPopularMoviesHomepage';




const HomepageMovies = () => {
    

    return (
        <div className={styles.homepagePopular}>
            <h2>Popular</h2>
            <ShowPopularMoviesHomepage />
        </div>
    )
}

export default HomepageMovies
