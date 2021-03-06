import React, { Component } from 'react';
import VideoDetails from '../VideoDetails/VideoDetails';
import Hero from '../Hero/Hero';
import VideoList from '../VideoList/VideoList';
import './videoMain.scss';
import axios from "axios";
import CommentDetails from '../CommentDetails/CommentDetails';

//Global declaration of the local API url and the endpoint 
const expressUrl = "http://localhost:8080";
const endPoint = "/videos";


class VideoMain extends Component {
    state={
        selectedVideo: [], 
        videos: [],
        firstVideoID: ""
    }
     
    //This function receives an ID as an argument and set new states to be used to pass as props 
    changeVideo = (id)=>{
        axios.get(`${expressUrl}${endPoint}`)
        .then(res=>{
            const newVideo = res.data.find(vid => vid.id === id)
            const newVideos = res.data.filter(vids => vids.id !== id)
            this.setState({
                selectedVideo: newVideo,
                videos: newVideos,
            })
        })
        .catch(err=>{
            console.log("Video Mount Error",err);
        })
    }

    //This gets the data from the API and sets a new state
    //This also changes the hero video/image with a new video ID
    getAllVideos = ()=>{
        axios.get(`${expressUrl}${endPoint}`)
        .then(res => {
            const firstVideoID = res.data[0].id;
            const filteredVideos = res.data.filter(vid=>vid.id !== res.data[0].id);
            this.setState({
                firstVideoID: firstVideoID,
                videos: filteredVideos,
            });
            this.changeVideo(this.state.firstVideoID);
        })
        .catch(err=>{
            console.log('video List Error',err);
        })
    }

    //This function invokes the getAllVideos function to set new states
    componentDidMount() {
        document.title = "Home Page";
        this.getAllVideos();        
    }

    //This function is always called when there is an update on the website.
    //Also takes user to the top of the page after the update is made 
    componentDidUpdate(){
        // const selectedID = this.props != null && this.props.match != null && this.props.match.params != null && this.props.match.params.id !== "" ? this.props.match.params.id : this.state.firstVideoID;
        const selectedID = this.props.match != null &&  this.props.match.params.id !== "" ? this.props.match.params.id : this.state.firstVideoID;
        if( selectedID !== this.state.selectedVideo.id){
            this.changeVideo(selectedID);
            window.scrollTo(0, 0);
        }
    }


    render() {
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
