import React from 'react'

import Bubble from '../../../assets/images/bubble-lg.png'
import './style.css'

const About = () => {
    return <>
        <div className='about-sec'>
            <img src={Bubble} alt='bubble' className='left-bubble' />
            <img src={Bubble} alt='bubble' className='right-bubble' />
            <div className='container'>
                <div className='about-title'>WHO WE ARE</div>
                <div className='about-des'>
                    Bubbles connects everyday people with their local laundromats and dry cleaners. 
                    Laundry in New York City is known to be a hassle. Bubbles has transformed the way
                    people approach doing laundry. We had a vision to transport users into a world where
                    laundry would not only be simple but also made convenient. Our team of experts has
                    worked tirelessly on this vision, carefully crafting our App to give users what
                    they’ve always wanted — the chance to go mobile with everything Laundry.  You’ve
                    dreamt it, we’ve done it !
                </div>
            </div>
        </div>
    </>
}

export default About
