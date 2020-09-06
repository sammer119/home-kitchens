import React from 'react'
import './About.css'

function About() {
    return (
        <div className='about'>
            <img src='https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='' />
            <div className='about__info'>
                <h3>Quality Craftsmanship from build to delivery</h3>
                <h2>Discover the beauty of a <br />handmade kitchen</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget <br />est sit amet sapien venenatis maximus vel in urna. Nam mauris arcu, <br />feugiat in finibus vitae, sollicitudin id purus. Ut imperdiet, magna eu <br />pharetra tincidunt, mauris purus ultrices.</p>
                <button>About Us</button>
            </div>
        </div>
    )
}

export default About
