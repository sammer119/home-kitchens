import React from 'react'
import './Nav.css'
import logo from '../images/mhk-logo.png'

function Header() {

    return (
        <>
            <div className='nav'>
                <h2 className='shop'>Shop</h2>
                <h2>Plan My Kitchen</h2>
                <img src={logo} alt='MHK Home Kitchens' />
                <h2>About Us</h2>
                <h2>Gallery</h2>
                <button>My order</button>
                <div className='burger'>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                </div>
            </div>
        </>
    )
}

export default Header