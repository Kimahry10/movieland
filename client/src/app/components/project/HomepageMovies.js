import React from 'react'
import styles from './ShowPopularMovies.module.scss';
import ShowPopularMovies from './ShowPopularMovies';




const HomepageMovies = () => {
    

    return (
        <div className={styles.homepagePopular}>
            <h2>Popular</h2>
            <ShowPopularMovies />
        </div>
    )
}

export default HomepageMovies
