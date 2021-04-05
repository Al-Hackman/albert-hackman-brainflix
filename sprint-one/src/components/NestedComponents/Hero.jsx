import React, { Component } from 'react';
import './hero.scss'


class Hero extends Component {
    
    render(props) {
        return (
            <div className="hero">
                <video className="hero__video" controls poster={this.props.thisVideo.image}></video>
            </div>
        )
    }
}

export default Hero;
