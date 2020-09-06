import React from 'react'
import './Footer.css'
import footerImage from '../images/footer-image.jpg'
import fb from '../images/fb.png'
import ig from '../images/ig.png'
import twitter from '../images/twitter.png'

function Footer() {
    return (
        <div className='footer' style={{ backgroundImage: `url(${footerImage})` }}>
            <div className='footer__lineLogo'>
                <div className='footer__logo'></div>
            </div>

            <div className='footer__mainItem'>
                <h2 className='footer__title'>About</h2>
                <ul>
                    <li>Shop</li>
                    <li>Plan my kitchen</li>
                    <li>About us</li>
                    <li>Gallery</li>
                </ul>
            </div>
            <div className='footer__mainItem'>
                <h2 className='footer__title'>Service</h2>
                <ul>
                    <li>FAQ</li>
                    <li>Contact</li>
                    <li>How to buy</li>
                    <li>Downloads</li>
                </ul>
            </div>
            <div className='footer__mainItem'>
                <h2 className='footer__title'>Info</h2>
                <ul>
                    <li>Delivery</li>
                    <li>Terms</li>
                    <li>Privacy</li>
                </ul>
            </div>
            <div className='footer__mainItem'>
                <h2 className='footer__title'>Follow</h2>
                <ul className='footer__social'>
                    <img src={fb} alt='facebook' />
                    <img src={twitter} alt='twitter' />
                    <img src={ig} alt='instagram' />
                </ul>
            </div>
            <div className='footer__copy'>
                <p>Copyright Online MTC Home Kitchens 2018 - All rights reserved.</p>
                <p>Responsive website design, Development & Hosting by mtc.</p>
            </div>
            <div className='line'>
            </div>
        </div>
    )
}

export default Footer
