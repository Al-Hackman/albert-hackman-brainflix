import React from 'react';
import img from '../../assets/images/Upload-video-preview.jpg';
import './videoUpload.scss';
import axios from "axios";


const expressUrl = "http://localhost:8080";

function VideoUpload(props) {
    
    document.title = "Upload Page";
   
    //This function uploads new video unto the server api
    //This function takes the user back to the home page with the default video
    //This also gives the user a feedback of a successfull upload
        let handleSubmit = (e) => {
                e.preventDefault();
                axios
                    .post(`${expressUrl}/videos`,{
                        title: e.target.title.value,
                        description: e.target.description.value,
                        video: e.target.video.value,
                        channel:e.target.channel.value,
                    })
                    .catch(err => {
                        console.log(err);
                    })
                alert("Video has been Uploaded successfully")
                e.target.reset();
        return  props.history.push("/");
    }

    
    return (
        <section className="upload">
            <h1 className="upload__title">Upload Video</h1>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="upload__main-wrap">
                    <div className="upload__video-wrap">
                        <label className="upload__thumbnail">VIDEO THUMBNAIL</label>
                        <img src={img} className="upload__video-img" alt="Video Thumbnail"/>
                    </div> 
                    <div className="upload__form-wrap">
                        <label className="upload__video-title-label">TITLE YOUR VIDEO</label>
                        <input name="title" className="upload__video-title" type="text" placeholder="Add a title to your video" />
                        <label className="upload__description-label">ADD A VIDEO DESCRIPTION</label>
                        <textarea name="description" className="upload__description" placeholder="Add a description of your video"></textarea>
                        <label className="upload__description-label">ADD CHANNEL</label>
                        <input name="channel" className="upload__video-title" type="text" placeholder="Add a channel to your video" />
                        <label className="upload__description-label" >ADD VIDEO</label>
                        <input name="video" className="upload__video" type="file" placeholder="select a video" accept="video/mp4,video/x-m4v,video/*"/>
                    </div>    
                </div>
                <div className="upload__button-wrap">
                    <button className="upload__button-publish" type="submit" value="Submit">PUBLISH</button>
                    <button className="upload__button-cancel" type="reset" value="Reset">CANCEL</button>
                </div>
            </form>
        </section>
    )
}


export default VideoUpload;
