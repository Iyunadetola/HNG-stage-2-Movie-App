import React from 'react'

const Footer = () => {
  return (
    <div className='footer-container' >
        <div className='social-icon' >
        < i className="fa-brands fa-facebook"/>
        < i className="fa-brands fa-instagram"/>
        < i className="fa-brands fa-twitter"/>
        < i className="fa-brands fa-youtube"/>
        </div>

        <div className='footer-conditions' >
            <h5>Conditions of Use</h5>
            <h5>Privacy & Policy</h5>
            <h5>Press Room</h5>
        </div>
        <div>
            <p>
        < i className="fa-regular fa-copyright"/> MovieBox by Iyunadetola

            </p>
        </div>
    </div>
  )
}

export default Footer