import React, { Fragment } from 'react'
import logo1 from '../assets/images/Logo-1.png'

const Footer = () => {
  return (
    <Fragment>
        <div className='footer-main'>
            <div>
                <img src={logo1} alt='footer-logo' className='footer-image' />
            </div>

            <div className='footer-content'>
                <p>Golds Gym</p>
            </div>
        </div>
    </Fragment>
  )
}

export default Footer