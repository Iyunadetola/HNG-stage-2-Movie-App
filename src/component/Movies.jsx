import React from 'react';
import { useState, useEffect } from 'react'
import Header from './Header';
import MovieCard from './MovieCard';

const Movies = () => {

    const[ movieList, setMovieList] = useState([])

    const API_URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=26d33e90d9e85f13bda167880f9ea53e'
    const getMovie = ()=>{
        fetch(API_URL)
        .then(res=> res.json())
        .then(data => setMovieList(data.results.slice(0,10)))
        .catch (error => console.log(error))
    }

    useEffect(()=>{
        getMovie()
    }, [])
    console.log(movieList)

  return (
    <div>
      <Header/>
        <div className='featured' >
          <h2>Featured movie</h2>
          <button>see more</button>
        </div>
    <div className='movieDiv' >
        {movieList.map((movee)=>(
        <MovieCard {...movee}/>
    ))}</div>
    </div>
  )
}

export default Movies