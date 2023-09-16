import React from 'react'
import Nav from '../component/Nav'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const SingleMovie = () => {
    const {movieID }=useParams()

const[ movieList, setMovieList] = useState([])

const API_URL = `https://api.themoviedb.org/3/movie/${movieID}?api_key=26d33e90d9e85f13bda167880f9ea53e`
const getMovie = ()=>{
    fetch(API_URL)
    .then(res=> res.json())
    .then(data => setMovieList(data))
    .catch (error => console.log(error))

}

useEffect(()=>{
    getMovie()
}, [movieID])
console.log(movieList)

    const MovieContent = ()=>{
        return (
        <div className='moviePageImage' >
            <img src={`https://image.tmdb.org/t/p/original${movieList.poster_path}` } alt='' />
            <div className='image-details' >
                <p data-testid= 'movie-title' >{movieList.title}</p>
                <span data-testid= 'movie-release-date' >{movieList.release_date}</span>
                <p data-testid='movie-overview' >{movieList.overview}</p>
                <p data-testid= 'movie-runtime' >{movieList.runtime}</p>
                <button>action</button>
                <button>drama</button>
            </div>

            <div className='movieCast' >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit obcaecati nesciunt et rerum itaque omnis doloremque est, quo libero. Veniam laboriosam libero cupiditate mollitia error nobis harum dicta ipsa delectus?</p>
            <h4>Directors: Toyin Tope</h4>
            <h4>Writers: Jim Cash, Jack tee, Fish tail</h4>
            <h4>Stars: Tom cruise, Iyunadetola, Titilope</h4>

            <button>Top rated movie #65</button>
            </div>

            
        </div>
        )

    }
  return (
    <div className='movieContainer' >
        <Nav/>
        <MovieContent/>
        
    </div>
  )
}

export default SingleMovie