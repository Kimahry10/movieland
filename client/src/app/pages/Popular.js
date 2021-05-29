import React, { useState } from 'react'
import ShowAllMovies from '../components/project/ShowAllMovies'
import ShowAllTvShows from '../components/project/ShowAllTvShows'
import { BaseLayout } from '../layouts'

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
    console.log(selectFilter)

  


    return (
        <BaseLayout>
            <h1>All popular movies</h1>
            <select onChange={getMovieOrTvShow}>
                <option value="movies">movies</option>
                <option value='tvshows'>tv shows</option>
            </select>
            <select onChange={getFilter}>
                <option value="popular">Popular</option>
                <option value='top_rated'>Top rated</option>
                <option value='upcoming'>Upcoming</option>
            </select>
            {selectValue === 'movies' ? <ShowAllMovies filter={selectFilter} /> : <ShowAllTvShows filter={selectFilter} />}
        </BaseLayout>
    )
}

export default Popular