import React from 'react'
import "./hero.scss"

//This takes the props and populate the hero-image/video

function Hero(props) {
    return (
            <div className="hero">
                <video className="hero__video" controls poster={props.thisVideo.image}></video>
            </div>
    )
}

export default Hero
