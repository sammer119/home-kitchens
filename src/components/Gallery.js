import React from 'react'
import './Gallery.css'
import galleryKitchen1 from '../images/kitchen-gallery-1.jpg'
import galleryKitchen2 from '../images/kitchen-gallery-2.jpg'
import galleryKitchen3 from '../images/kitchen-gallery-3.jpg'
import galleryKitchen4 from '../images/kitchen-gallery-4.jpg'

function Gallery() {
    return (
        <div className='gallery'>
            <div className='gallery__info'>
                <h3>Customer Gallery</h3>
                <div className='gallery__slider'>
                    <img src={galleryKitchen1} alt='Kitchen 1' />
                    <img src={galleryKitchen2} alt='Kitchen 2' />
                    <img src={galleryKitchen3} alt='Kitchen 3' />
                    <img src={galleryKitchen4} alt='Kitchen 4' />
                </div>
                <button>View more</button>
            </div>
        </div>
    )
}

export default Gallery
