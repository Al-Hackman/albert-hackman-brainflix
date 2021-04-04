import React from 'react';
import videoDetails from '../../assets/data/video-details.json';
import VideoMain from '../NestedComponents/VideoMain';
import img from '../../assets/images/Mohan-muruge.jpg';
import views from '../../assets/icons/Icon-views.svg';
import likes from '../../assets/icons/Icon-likes.svg';
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
                        <span className="details__date">
                        {new Date(this.props.thisVideo.timestamp).getMonth()+1}/{new Date(this.props.thisVideo.timestamp).getDate()}/{new Date(this.props.thisVideo.timestamp).getFullYear()}</span>
                    </div>
                    <div className="details__views-likes">
                        <img className="details__icon" src={views} alt="Views From People"/><span className="details__views">{this.props.thisVideo.views}</span>
                        <img className="details__icon" src={likes} alt="Likes From People"/><span className="details__likes">{this.props.thisVideo.likes}</span>
                    </div>
                </div>
                <p className="details__description">{this.props.thisVideo.description}</p>
                <p className="details__comment">3 Comments</p>
                <p className="details__comment-heading">JOIN THE CONVERSATION</p>
                <div className="details__add-comment-wrap">
                    <img src={img} className="details__add-comment-img" alt="Add-Comment Photo"/>
                    <div className="details__add-comment">
                        <textarea name="input" className="details__input" placeholder="That was easily the most spectacular BMX moment ever."></textarea>
                        <button className="details__button">COMMENT</button>
                    </div>
                </div>
                {this.props.thisVideo.comments.map(com=> <div className="details__comment-wrap" key={com.id}> 
                    <div className="details__comment-img"></div>
                    <div className="details__saved-comment">
                        <div className="details__name-date-wrap">
                            <span className="details__comment-name">{com.name}</span>
                            <span className="details__comment-date">{new Date(com.timestamp).getMonth()+1}/{new Date(com.timestamp).getDate()}/{new Date(com.timestamp).getFullYear()}</span>
                        </div>
                        <p className="details__info">{com.comment}</p>
                    </div>
                </div>)}
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
