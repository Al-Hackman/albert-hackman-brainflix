import React, { Component } from 'react';
import VideoDetails from '../VideoDetails/VideoDetails';
import Hero from '../Hero/Hero';
import VideoList from '../VideoList/VideoList';
import './videoMain.scss';
import axios from "axios";

class VideoMain extends Component {
    state={
        videoID: "",
        selectedVideo: [], 
        videos: []
    }
    
    changeVideo = (id)=>{
        console.log('this id', id)
        const URL = "https://project-2-api.herokuapp.com";
        const GET = "/videos";
        const API_KEY= "?api_key=0fadae90-1377-4238-a02e-c25030ac914b";
        axios.get(`${URL}${GET}/${id}${API_KEY}`)
        .then(res=>{
            console.log(res.data)
            this.setState({
            videoID: res.data.id,
            selectedVideo: res.data
            })
        })
        .catch(err=>{
            console.log(err);
        })
    }

    getAllVideos = (id)=>{
        const URL = "https://project-2-api.herokuapp.com";
        const GETT = "/videos";
        const API_KEY= "?api_key=0fadae90-1377-4238-a02e-c25030ac914b";
        axios.get(`${URL}${GETT}${API_KEY}`)
        .then(res => {
            
            const firstVideoID = res.data.shift().id
            console.log('video id',firstVideoID)
            console.log('videos',res.data)
            this.setState({videoID: firstVideoID})
            this.setState({videos: res.data})
            console.log('seleted video id', this.state.videoID)
            this.changeVideo(this.state.videoID);
        })
        .catch(err=>{
        console.log('video list err',err);
        })
    }

    componentDidMount() {
        this.getAllVideos();
        console.log('mounted')
        
    }

    componentDidUpdate(){
        console.log('updated')
        console.log('params')

    //show them the error when we click on home do a console.log in the did mount and did update to show what is happening
    const selectedID = this.props != null && this.props.match != null && this.props.match.params != null && this.props.match.params.id != "" ? this.props.match.params.id : this.state.videoID;
  
        if(selectedID !== this.state.videoID){
            this.changeVideo(selectedID);
        }
    }


    render() {
        console.log('selectedVideo', this.state.selectedVideo)
         if (this.state.selectedVideo.length <= 0) {
            //   this.changeVideo(this.state.videoID);
    // if (!this.state.images) { - Alternate Option
    // if (!this.state.loaded) { - Alternate Option with above state control
      return (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <h2>Loading...</h2>
        </div>
      );
    }
       
        return (
            <div>
                <div className="hero-section">
                    <Hero thisVideo={this.state.selectedVideo}/>
                </div>
                <div className="details-video-wrap">
                    <div className="details-section">
                        <VideoDetails thisVideo={this.state.selectedVideo} />
                    </div>
                    <VideoList videos={this.state.videos} />
                </div>
            </div>
        )
    }
}



export default VideoMain;
