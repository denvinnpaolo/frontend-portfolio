import React from 'react';
import Carousel from 'react-multi-carousel';
import Typewriter from 'typewriter-effect';

import MultiCarousel from './MultiCarousel';
const Welcome = () => {

    const title = ['Software Engineer', 'Problem Solver', ".NET Developer"]

    const Writer = props => {
        return(
            <Typewriter 
                options={
                    {strings: props.title,
                    autoStart: true,
                    loop: true}
                }
            />
        )
    }
    return(
        <div id="welcome-container">
            <div id="welcome-text-container">
                <h1 id="welcome-title">Denvinn P. Magsino</h1>
                <h1 id="welcome-title"><Writer title={title} /></h1>
                <div id="welcome-subtitle">Use AI to write proven, high converting copy for increased conversions and higher ROI. Instantly generate high-quality copy for ads, emails, websites, listings, blogs, and more...</div>
                <a id="welcome-btn">About →</a>

            </div>
            <div id="welcome-slider"><MultiCarousel /></div>
        </div>
    )
};

export default Welcome;