import React, { Component } from 'react';
import videoDetails from '../../assets/data/video-details.json';

class Hero extends Component {
    
    render(props) {
        console.log({videoDetails});
        return (
            <div className="hero">
                <video controls poster={videoDetails[0].image}>
                    {/* <source src={videoDetails[0].video} type="video/mp4"></source> */}
                </video>
            </div>
        )
    }
}

export default Hero;
