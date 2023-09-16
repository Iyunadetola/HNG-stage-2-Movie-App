import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const MovieCard = (props) => {
  // console.log(props)
  const {release_date}=props
  const UTC = new Date(release_date).toUTCString()
  return (

  <div data-testid='movie-card' >
      
      <Link className='moviecardLink' to={`/movies/${props.id}`} state={props} >
        <div className='cardContainer' >
        <div className='poster' >
           <div className='posterImgDiv' ><img data-testid='movie-poster' src={`https://image.tmdb.org/t/p/w500${props.poster_path}` } alt='/>'/> </div>
            <div className='posterIconHeart' > <i className=" fa-solid fa-heart" style={{ fontSize: '1em', color: '#yellow' }} /> </div>
        </div>
        <div className="info">
            <p data-testid='movie-title' className="title">{props.title}</p>
            <p  data-testid='movie-release-date' className="date">{UTC}</p>
        </div>
        </div>
      </Link>
    </div>
  )
}

export default MovieCard