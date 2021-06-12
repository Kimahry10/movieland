import React from 'react'
import ShowTrailers from './ShowTrailers';
import styles from './ShowTrailers.module.scss';


const HomepageTrailers = () => {
    return (
        <div>
            <h2 className={styles.trailersTitle}>Trailers</h2>
            <ShowTrailers />
        </div>
    )
}

export default HomepageTrailers
