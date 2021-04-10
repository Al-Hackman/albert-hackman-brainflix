import React from 'react'
import "./hero.scss"

function Hero(props) {
    return (
            <div className="hero">
                <video className="hero__video" controls poster={props.thisVideo.image}></video>
            </div>
    )
}

export default Hero
