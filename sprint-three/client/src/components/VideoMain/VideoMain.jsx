import React, { Component } from 'react';
import VideoDetails from '../VideoDetails/VideoDetails';
import Hero from '../Hero/Hero';
import VideoList from '../VideoList/VideoList';
import './videoMain.scss';
import axios from "axios";
import CommentDetails from '../CommentDetails/CommentDetails';

//Global declaration of Variables 
const expressUrl = "http://localhost:8080";
const url = "https://project-2-api.herokuapp.com";
const endPoint = "/videos";
const apiKey= "?api_key=0fadae90-1377-4238-a02e-c25030ac914b";


class VideoMain extends Component {
    state={
        videoID: "",
        selectedVideo: [], 
        videos: [],
        firstVideoID: ""
    }
     
    //This function receives an ID as an argument and set new states to be used to pass as props 
    changeVideo = (id)=>{
        // axios.get(`${url}${endPoint}/${id}${apiKey}`)
        axios.get(`${expressUrl}${endPoint}/${id}`)
        .then(res=>{
            console.log("This is the response",res.data)
            this.setState({
            videoID: res.data.id,
            selectedVideo: res.data
            })
        })
        .catch(err=>{
            console.log("Video Mount Error",err);
        })
    }

    //This gets the data from the API and sets a new state
    //This also changes the hero video/image with a new video ID
    getAllVideos = ()=>{
        // axios.get(`${url}${endPoint}${apiKey}`)
        axios.get(`${expressUrl}${endPoint}`)
        .then(res => {
            console.log("Another response",res.data[0].id)
            const firstVideoID = res.data[0].id;
            this.setState({firstVideoID: firstVideoID})
            const filteredVideos = res.data.filter(vid=>vid.id !== res.data[0].id);
            this.setState({videoID: firstVideoID});
            this.setState({videos: filteredVideos});
            this.changeVideo(this.state.videoID);
        })
        .catch(err=>{
        console.log('video List Error',err);
        })
    }

    //This function invokes the getAllVideos function to set new states
    componentDidMount() {
        this.getAllVideos();        
    }

    //This function is always called when there is an update on the website.
    //Also takes user to the top of the page after the update is made 
    componentDidUpdate(){
        // const selectedID = this.props != null && this.props.match != null && this.props.match.params != null && this.props.match.params.id !== "" ? this.props.match.params.id : this.state.firstVideoID;
        const selectedID = this.props.match != null && this.props.match.params.id !== "" ? this.props.match.params.id : this.state.firstVideoID;
        if( selectedID !== this.state.videoID){
            this.changeVideo(selectedID);
            window.scrollTo(0, 0);
        }
    }


    render() {
        console.log("This Video",this.state.selectedVideo);
        //This condition helps print something on the screen for users as the app is retrieving data from API
        if (this.state.selectedVideo.length <= 0) {
            return (
                    <div className="initial-load">
                    <h2 className="initial-load__message">Loading...</h2>
                    </div>
                );
            }
       
        return (
            <>
                <section className="hero-section">
                    <Hero thisVideo={this.state.selectedVideo}/>
                </section>
                <section className="details-section">
                    <div className="details-section__wrap">
                        <VideoDetails thisVideo={this.state.selectedVideo} />
                        <CommentDetails thisVideo={this.state.selectedVideo} />
                    </div>
                    <VideoList videos={this.state.videos} />
                </section>
            </>
        )
    }
}



export default VideoMain;
