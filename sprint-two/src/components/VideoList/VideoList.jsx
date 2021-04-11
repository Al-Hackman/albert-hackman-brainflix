import {Link} from "react-router-dom";
import './videoList.scss';


function VideoList (props){
   
        return (
            <div className="videos">
                <h4 className="videos__title">NEXT VIDEO</h4>
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


export default VideoList;

