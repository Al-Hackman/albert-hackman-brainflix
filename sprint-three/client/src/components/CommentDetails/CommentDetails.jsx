import React from 'react';
import img from '../../assets/images/Mohan-muruge.jpg';
import './commentDetails.scss';


//This receives the props and populate the comments on individual video and also posts comments

function CommentDetails(props) {
    // console.log("comment videos",props.thisVideo.comments)
   
   
    return (
        <section className="details">
            <p className="details__comment">{props.thisVideo.comments.length} Comments</p>
                <label className="details__comment-heading">JOIN THE CONVERSATION</label>
                <div className="details__add-comment-wrap">
                    <img src={img} className="details__add-comment-img" alt="Add-Comment User"/>
                    <div className="details__add-comment">
                        <textarea name="input" className="details__input" placeholder="Add a comment"></textarea>
                        <button className="details__button">COMMENT</button>
                    </div>
                </div>
                {props.thisVideo.comments.map(com=> <div className="details__comment-wrap" key={com.id}> 
                    <div className="details__comment-img"></div>
                    <div className="details__saved-comment">
                        <div className="details__name-date-wrap">
                            <span className="details__comment-name">{com.name}</span>
                            <span className="details__comment-date">{new Date(com.timestamp).getMonth()+1}/{new Date(com.timestamp).getDate()}/{new Date(com.timestamp).getFullYear()}</span>
                        </div>
                        <p className="details__info">{com.comment}</p>
                    </div>
                </div>)}
        </section>
    )
}

export default CommentDetails;
