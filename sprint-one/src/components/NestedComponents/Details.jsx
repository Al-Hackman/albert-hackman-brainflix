import React from 'react';
import img from '../../assets/images/Mohan-muruge.jpg';
import views from '../../assets/icons/Icon-views.svg';
import likes from '../../assets/icons/Icon-likes.svg';
import './details.scss';


class Details extends React.Component {

    render(props, event){
               
        return (
            <div className="details">
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
                    <img src={img} className="details__add-comment-img" alt="Add-Comment User"/>
                    <div className="details__add-comment">
                        <textarea name="input" className="details__input" placeholder="Add a comment"></textarea>
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


    
export default Details;
