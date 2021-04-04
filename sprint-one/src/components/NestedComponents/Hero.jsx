import React, { Component } from 'react';
import videoDetails from '../../assets/data/video-details.json';
import './hero.scss'


class Hero extends Component {
    
    render(props) {
        console.log('this video',this.props.thisVideo.image);
        return (
            <div className="hero">
                <video className="hero__video" controls poster={this.props.thisVideo.image}></video>
            </div>
        )
    }
}

export default Hero;
