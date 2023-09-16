import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (

    <div className='NavContainer' >
        <div>
            <Link to='/'className='navLinkDiv'  >
            <h3>  <i class=" fa-solid fa-tv" style={{ fontSize: '1.75em', color: '#black' }} />  MovieBox</h3> </Link>
        </div>

        <ul>
           <Link to='/' > <li> <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /> Home</li></Link>
           <Link to='/' ><li> <i class=" fa fa-fw fa-video" style={{ fontSize: '1.75em', color: '#black' }} /> Movies  </li></Link>
           <Link> <li> <i class=" fa fa-fw fa-tv" style={{ fontSize: '1.75em', color: '#black' }} /> TV Series  </li></Link>
           <Link> <li>  <i class=" fa fa-fw fa-fw fa-video" style={{ fontSize: '1.75em', color: '#black' }} />  Upcoming</li></Link>
        </ul>

        <div className='navDetails' >
            <h4>Play movie quizes and earn free tickets</h4>
            <p>50k people are playing now</p>
            <button>start playing</button>
        </div>

        <div className='navLogout' >
        <button>  <i class=" fa fa-fw fa-right-from-bracket" style={{ fontSize: '1.75em', color: '#black' }}/> Log out</button>
        </div>
    </div>
  )
}

export default Nav