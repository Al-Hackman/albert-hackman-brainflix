import React, { Component } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import './videoList.scss'


function VideoList (props){
//     state = {
//     videos: [],
//   }

//   componentDidMount() {
//     const URL = "https://project-2-api.herokuapp.com";
//     const GETT = "/videos";
//     const API_KEY= "?api_key=0fadae90-1377-4238-a02e-c25030ac914b";
//     axios.get(`${URL}${GETT}${API_KEY}`)
//     .then(res => {
//         // console.log('video list',res.data.shift())
//         this.setState({videos: res.data})
//       })
//     .catch(err=>{
//       console.log('video list err',err);
//       })
//   }

   
        return (
            <div className="videos">
                <p className="videos__title">NEXT VIDEO</p>
                {props.videos.map(video => <Link to={`/videos/${video.id}`} key={video.id} className="video__link"><div className="video" >
                    <img className="video__img" src={video.image} alt={video.title}/>
                    <div className="video__description">
                        <p className="video__title">{video.title}</p>
                        <p className="video__channel">{video.channel}</p>
                    </div>
                </div> </Link>)}
            </div>
        )
}


export default VideoList

