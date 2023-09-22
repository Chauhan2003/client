import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <>

            <div className='header'>
                <h2 className='logo'>bookplace<span>.com</span></h2>

                <i class="ri-apps-2-fill" id='nav-icon'></i>
                <nav className='navbar'>
                    <Link to="/" className='nav__link active'>Home</Link>
                    <Link to="/holiday" className='nav__link'>Holiday</Link>
                    <Link to="/mytrip" className='nav__link'>My Trips <i class="ri-shopping-bag-2-fill" id='mytrip-icon'></i></Link>
                    <Link to="/signup" className='nav__link button'>Signup</Link>
                </nav>
            </div>

        </>
    )
}

export default Navbar
