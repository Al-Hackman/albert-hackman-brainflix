import React from 'react';
import views from '../../assets/icons/Icon-views.svg';
import likes from '../../assets/icons/Icon-likes.svg';
import './videoDetails.scss';


function VideoDetails(props) {
                  
        return (
            <div className="details">
                <h1 className="details__title">{props.thisVideo.title} </h1>
                <div className="details__wrap">
                    <div className="details__channel-date">
                        <span className="details__channel">By {props.thisVideo.channel}</span>
                        <span className="details__date">
                        {new Date(props.thisVideo.timestamp).getMonth()+1}/{new Date(props.thisVideo.timestamp).getDate()}/{new Date(props.thisVideo.timestamp).getFullYear()}</span>
                    </div>
                    <div className="details__views-likes">
                        <img className="details__icon" src={views} alt="Views From People"/><span className="details__views">{props.thisVideo.views}</span>
                        <img className="details__icon" src={likes} alt="Likes From People"/><span className="details__likes">{props.thisVideo.likes}</span>
                    </div>
                </div>
                <p className="details__description">{props.thisVideo.description}</p>
            </div>
        );
    
}

    
export default VideoDetails;
