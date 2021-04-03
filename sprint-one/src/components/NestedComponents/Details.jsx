import React from 'react';
import videoDetails from '../../assets/data/video-details.json';
import VideoMain from '../NestedComponents/VideoMain';


class Details extends React.Component {
    state = {
        selectedVideo: videoDetails[0]
    }
    // video = this.LoadVideo(this.props.videoID)
    // newState = ()=>{
    //     this.setState({selectedVideo: LoadVideo(this.props.videoID)})
    // }/
     LoadVideo = (event) => {
        console.log('running...')
        let thisVideo = videoDetails.find(video => video.id === this.props.videoID)
        this.setState({selectedVideo: thisVideo});
        console.log(this.state.selectedVideo)
  }
    // let videoID = {this.props.videoID};
    
    render(props, event){
        console.log('videoID = ', this.props.videoID,)
        console.log('handleClick = ', this.props.handleClick,)
        console.log('event from main = ', event)
        
        // this.newState()
        // this.LoadVideo(this.props.videoID)
        // setTimeout(()=>{
        //     this.LoadVideo()
        // },1000)
        // this.LoadVideo();
        // LoadVideo=()=>{
        // console.log('running...')
        // let thisVideo = videoDetails.find(video => video.id === this.props.videoID)
        // this.setState({selectedVideo: thisVideo});
        // console.log(this.state.selectedVideo)
        // }
        return (
            // this.LoadVideo()
            // this.LoadVideo(this.props.videoID);
            <div className="details">
        {/* selectedVideo: videoDetails[0] */}
                <h1>{this.state.selectedVideo.title} </h1>
                <h5>{this.state.selectedVideo.channel}</h5>
                <p>{this.state.selectedVideo.description}</p>
            </div>
        );
    }
}

// function LoadVideo(id) {
//     // get the selected video and pass to state's seletedVideo
//     let thisVideo = videoDetails.find(video => video.id === id)
//     this.setState({})
//     return thisVideo
// }

    
export default Details;
