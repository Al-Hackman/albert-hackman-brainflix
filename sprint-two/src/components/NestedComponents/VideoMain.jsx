import React, { Component } from 'react';
import Details from './Details';
import Hero from '../Hero/Hero';
import videoList from '../../assets/data/videos.json';
import videoDetail from '../../assets/data/video-details.json';
import './videoMain.scss';

class VideoMain extends Component {
    state={
        videoID: videoList[0].id,
        selectedVideo: videoDetail[0],
        videoListWithoutDefault: videoList.slice(1)
    }
    changeVideo = (id) =>{
        let video = videoDetail.find(vid => vid.id === id)
        this.setState({videoID: video.id})
        this.setState({selectedVideo: video})
        return video
    }
    render() {
        return (
            <div>
                <div className="hero-section">
                    <Hero thisVideo={this.state.selectedVideo}/>
                </div>
                <div className="details-video-wrap">
                    <div className="details-section">
                        <Details thisVideo={this.state.selectedVideo} />
                    </div>
                    <div className="videos">
                        <p className="videos__title">NEXT VIDEO</p>
                        {this.state.videoListWithoutDefault.map(video => <div className="video" key={video.id} onClick={event=>this.changeVideo(video.id)}>
                            <img className="video__img" src={video.image} alt="Videos"/>
                            <div className="video__description">
                                <p className="video__title">{video.title}</p>
                                <p className="video__channel">{video.channel}</p>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        )
    }
}



export default VideoMain;
