import React from 'react'
import {Link, withRouter} from 'react-router-dom';
import SavePointLogo from '../../assets/savepoint.png'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import './NavBar.scss';

function Navbar() {

    const matches = useMediaQuery('(max-width:768px)');
    return (
        <div className='navbar'>
            <Link to='/'>
                <img className='navbar-logo' src={SavePointLogo} alt="SavePointLogo"/>
            </Link>

            {matches ? 
                <div className="hamburger">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                :
                <ul className='nav-links'>
                    <li><Link to=''>Featured Events</Link></li>
                    <li><Link to=''>How It Works</Link></li>
                    <li><Link to=''>Sign In</Link></li>
                </ul>
            }
            
            
        </div>
    )
}

export default Navbar
