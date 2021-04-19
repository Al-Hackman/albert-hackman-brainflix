import React from 'react';
import img from '../../assets/images/Mohan-muruge.jpg';
import './commentDetails.scss';
import axios from "axios";


const expressUrl = "http://localhost:8080";

//This receives the props and populate the comments on individual video and also posts comments

function CommentDetails(props) {
    // console.log("comment videos",props.thisVideo.comments)
   

         let commentSubmit = (e) => {
                e.preventDefault();

                // const submitData = new FormData()
                // submitData.append("title", e.target.title.value)
                // submitData.append("description", e.target.description.value)
                // submitData.append("video", e.target.video.value)

                axios
                    .post(`${expressUrl}/videos`,{
                    // url: expressUrl + "videos",
                    // data: submitData,
                    // headers: { "Content-Type": "multipart/form-data" },
                    // title: e.target.title.value,
                    // description: e.target.description.value,
                    // video: e.target.video.value,
                    // channel:e.target.channel.value,
                    comments: e.target.comments.value
                    })
                    .then(function (response) {
                        //handle success
                        console.log(response);
                    })
                    .catch(err => {
                    console.log(err);
                    })
                // alert("Video has been Uploaded successfully")
                e.target.reset();
        return  props.history.push("/");
    }



   
    return (
        <section className="details">
            <p className="details__comment">{props.thisVideo.comments.length} Comments</p>
                <label className="details__comment-heading">JOIN THE CONVERSATION</label>
                <div className="details__add-comment-wrap">
                    <img src={img} className="details__add-comment-img" alt="Add-Comment User"/>
                    <form onSubmit={commentSubmit} encType="multipart/form-data">
                    <div className="details__add-comment">
                        <textarea name="input" className="details__input" placeholder="Add a comment"></textarea>
                        <button className="details__button" type="submit" value="Submit">COMMENT</button>
                    </div>
                    </form>
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
