import React from 'react'
import './Header.css'
import Nav from './Nav'
import kitchenImage from '../images/kitchen-slider-01.jpg'

function Header() {
    return (
        <>
            <div className='header' style={{ backgroundImage: `url(${kitchenImage})` }}>
                <Nav />
                <div className='header__info'>
                    <h2>Design and order your new kitchen online today</h2>
                    <h1>Bespoke & made to measure<br /> handmade kitchen design</h1>
                    <button>ORDER NOW</button>
                </div>

            </div>
        </>
    )
}

export default Header