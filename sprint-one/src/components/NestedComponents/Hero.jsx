import React, { Component } from 'react';
import videoDetails from '../../assets/data/video-details.json';

class Hero extends Component {
    
    render(props) {
        console.log('this video',this.props.thisVideo.image);
        return (
            <div className="hero">
                <video controls poster={this.props.thisVideo.image}>
                    {/* <source src={videoDetails[0].video} type="video/mp4"></source> */}
                </video>
            </div>
        )
    }
}

export default Hero;
