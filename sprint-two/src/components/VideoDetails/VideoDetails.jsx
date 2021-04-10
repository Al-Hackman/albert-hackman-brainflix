import React from 'react';
import views from '../../assets/icons/Icon-views.svg';
import likes from '../../assets/icons/Icon-likes.svg';
import './videoDetails.scss';


function VideoDetails(props) {
     
//   state = {
//     location: this.otherCities[0],
//     description: null,
//     temperature: null,
//     icon: null,
//   };
  
//   getWeather = (city)=>{
//     axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
//     .then(res=>{
//       this.setState({
//         location:res.data.name,
//         description:res.data.weather[0].description,
//         temperature: Math.round(res.data.main.temp - 273),
//         icon:res.data.weather[0].icon
//       })
//     })
//     .catch(err=>{
//       console.log(err);
//     })
//   }

//   componentDidMount() {
//     this.getWeather(this.state.location);
//   }

//   componentDidUpdate(){
//     //show them the error when we click on home do a console.log in the did mount and did update to show what is happening
//     const city = this.props.match.params.city ? this.props.match.params.city : this.otherCities[0];
    
//     //if the city that is being returned is different from the city that we have set in state then do it
//     if(city !== this.state.location){
//       this.getWeather(city);
//     }
//   }
        console.log("this is details:",{props})
               
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
                {/* <p className="details__comment">3 Comments</p>
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
                </div>)} */}
            </div>
        );
    
}


    
export default VideoDetails;
