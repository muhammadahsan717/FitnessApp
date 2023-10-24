import React, { Fragment } from 'react'
import Logo from '../assets/images/Logo.png';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <Fragment>
            <div className='nav-main'>
                <Link to='/'>
                    <div>
                        <img src={Logo} alt='logo' className='navbar-image'/>
                    </div>
                </Link>
                <div className='navbar-content'>
                    <Link to='/' style={{borderBottom: '3px solid #FF2625', textDecoration: 'none', color: '#3A1212' }}>                    
                        <p>Home</p>
                    </Link>
                    <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}><p>Exercises</p></a>
                </div>
            </div>
        </Fragment>
    )
}

export default Navbar