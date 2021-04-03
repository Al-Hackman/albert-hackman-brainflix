import React, { Component } from 'react';
import Details from './Details';
import Hero from './Hero';
import videoList from '../../assets/data/videos.json';
import './videoMain.scss';

class VideoMain extends Component {
    state={
        videoID: videoList[0].id
    }
    changeVideo = (event, id) =>{
        console.log('vid ID', id)
        this.setState({videoID:id})
        return id
    }
    render() {
        console.log({videoList})
        return (
            <div>
                {/* main container */}
                <div className="hero">
                    <Hero name="videoID"/>
                </div>
                <div className="deatils-video-wrap">
                    <div className="details">
                        <Details videoID={this.state.videoID} handleClick={this.changeVideo} />
                    </div>
                    <div className="videos">
                        {/* video list */}
                        {/* <span onClick={event=>this.changeVideo(event,videoList[2].id)}> */}
                        {videoList.map(video => <div onClick={event=>this.changeVideo(event,video.id)}>
                            <img src={video.image} alt=""/>
                            
                            </div>)}
                        {/* {students.map(student => <li>{student}</li>)} */}
                        {/* </span> */}
                    </div>
                </div>
            </div>
        )
    }
}



export default VideoMain;
