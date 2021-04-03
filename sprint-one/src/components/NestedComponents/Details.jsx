import React from 'react';
import videoDetails from '../../assets/data/video-details.json';
import VideoMain from '../NestedComponents/VideoMain';
import img from '../../assets/images/Mohan-muruge.jpg';
import './details.scss';


class Details extends React.Component {
    state = {
        // selectedVideo: videoDetails[0]
    }
    // video = this.LoadVideo(this.props.videoID)
    // newState = ()=>{
    //     this.setState({selectedVideo: LoadVideo(this.props.videoID)})
    // }/
//      LoadVideo = (event) => {
//         console.log('running...')
//         let thisVideo = videoDetails.find(video => video.id === this.props.videoID)
//         this.setState({selectedVideo: thisVideo});
//         console.log(this.state.selectedVideo)
//   }
    // let videoID = {this.props.videoID};
    
    render(props, event){
        console.log('videoID = ', this.props.thisVideo.id,)
        console.log('videoID = ', videoDetails)
        // console.log('handleClick = ', this.props.handleClick,)
        // console.log('event from main = ', event)
        
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
                <h1 className="details__title">{this.props.thisVideo.title} </h1>
                <div className="details__wrap">
                    <div className="details__channel-date">
                        <span className="details__channel">By {this.props.thisVideo.channel}</span>
                        <span className="details__date">{this.props.thisVideo.timestamp}</span>
                    </div>
                    <div className="details__views-likes">
                        <span className="details__views">{this.props.thisVideo.views}</span>
                        <span className="details__likes">{this.props.thisVideo.likes}</span>
                    </div>
                </div>
                <p className="details__description">{this.props.thisVideo.description}</p>
                <h4 className="details__comment">3 Comments</h4>
                <h4 className="details__comment-heading">JOIN THE CONVERSATION</h4>
                <div>
                    <img src={img} className="details__add-comment-img" alt="Add-Comment Photo"/>
                    <div className="details__add-comment">
                        <textarea name="" id="details__input"></textarea>
                        <button className="details__button">COMMENT</button>
                    </div>
                </div>
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
