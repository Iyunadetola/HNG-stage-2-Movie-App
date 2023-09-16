import React from 'react'
import { useState, useEffect } from 'react'
import Movies from './Movies'
import poster from '../assets/Poster.png'

const Header = (props) => {
    const API_SEARCH = 'https://api.themoviedb.org/3/search/movie?api_key=26d33e90d9e85f13bda167880f9ea53e'
    const[term, setTerm] = useState()
    const handleSearch = (e) =>{
        e.preventDefault()

        fetch(API_SEARCH)
        .then(res=> res.json())
        .then(data => setTerm(data.results))
    }
  return (

    <div className='headerContainer' >

        <img src={poster} alt='' className='poster-img' />
        <div className='header-top' >
            <div><h1>MOVIE BOX</h1></div>
            <div>
                <form onSubmit={handleSearch}>
                <input type="search" name="search" id="" placeholder='what do you want to see' onChange={(e)=>setTerm(e.target.value)} />
                <button>search</button>
                </form>
            </div>
            <div>
            <div>
            <h3>sign in</h3>
            </div>
            </div>

            <div className='header-john' >
                <h1>John Wick 3 :
                Parabellum
                </h1>
                 <p>
             John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.
                 </p>
                <button>watch trailer</button>
            </div>
        </div>

        <div>
                

        </div>

        
    </div>
  )
}

export default Header