import React, { Fragment } from 'react'
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
    return (
        <Fragment>
            <div className="hero-banner">
                <div>
                    <p className='hero-banner-c1'>Fitness Club</p>
                    <p className='hero-banner-c2'>Sweat, Smile <br /> And Repeat</p>
                    <p className='hero-banner-c3'>Check out the most effective exercises personalized to you</p>
                    <a href="#exercises" className='hero-banner-c4'>Explore Exercises</a>
                    <p className='hero-banner-c5'>Exercise</p>
                    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
                </div>
            </div>
        </Fragment>
    )
}

export default HeroBanner