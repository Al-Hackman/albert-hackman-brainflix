import React from 'react';
import img from '../../assets/images/Upload-video-preview.jpg'
import './videoUpload.scss'

function VideoUpload(props) {

    //This function takes the user back to the home page with the default video
    //This also gives the user a feedback of a successfull upload
    let handleSubmit = (e) => {
                e.preventDefault();
                alert("Video has been Uploaded successfully")
        return  props.history.push("/");
    }

    
    return (
        <section className="upload">
            <h1 className="upload__title">Upload Video</h1>
            <div className="upload__main-wrap">
                <div className="upload__video-wrap">
                    <label className="upload__thumbnail">VIDEO THUMBNAIL</label>
                    <img src={img} className="upload__video-img" alt="Video Thumbnail"/>
                </div>
                <form className="upload__form-wrap">
                    <label className="upload__video-label">TITLE YOUR VIDEO</label>
                    <input className="upload__video-title" type="text" placeholder="Add a title to your video" />
                    <label className="upload__description-label">ADD A VIDEO DESCRIPTION</label>
                    <textarea name="input" className="upload__description" placeholder="Add a description of your video"></textarea>
                </form>
            </div>
            <div className="upload__button-wrap">
                <button className="upload__button-publish" onClick={handleSubmit}>PUBLISH</button>
                <button className="upload__button-cancel" >CANCEL</button>
            </div>
        </section>
    )
}


export default VideoUpload;
