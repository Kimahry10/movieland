import React, { useState } from 'react'
import styled from 'styled-components';
import ShowAllMovies from '../components/project/ShowAllMovies'
import ShowAllTvShows from '../components/project/ShowAllTvShows'
import { BaseLayout } from '../layouts'
import styles from './Popular.module.scss';


const Popular = () => {

    const [selectValue, setSelectValue] = useState('movies')

    const getMovieOrTvShow = (e) => {
        var value = e.target.value;
        setSelectValue(value)
    }

    const [selectFilter, setSelectFilter] = useState('popular')

    const getFilter = (e) => {
        var value = e.target.value;
        setSelectFilter(value)
    }

  


    return (
        <BaseLayout>
            <h1 className={styles.mainHeader}>All {selectFilter === 'top_rated' ? 'top rated' : selectFilter} {selectValue} </h1>
            <div className={styles.selectWrap}>
                <select className={styles.selectMovieOrTvShow} onChange={getMovieOrTvShow}>
                    <option value="movies">movies</option>
                    <option value='tvshows'>tv shows</option>
                </select>
                <select className={styles.selectMovieOrTvShow} onChange={getFilter}>
                    <option value="popular">Popular</option>
                    <option value='top_rated'>Top rated</option>
                    <option value='upcoming'>Upcoming</option>
                </select>
            </div>


            {selectValue === 'movies' ? <ShowAllMovies filter={selectFilter} /> : <ShowAllTvShows filter={selectFilter} />}
        </BaseLayout>
    )
}

export default Popular