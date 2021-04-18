import {Switch, Route} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import './styles/global.scss';
import VideoMain from './components/VideoMain/VideoMain';
import VideoUpload from './pages/VideoUpload/VideoUpload';


function App() {

  return (
    <div className="App">
            <Header />
      <Switch>
        <Route path="/" exact>
            <VideoMain />
        </Route>
        <Route path="/upload" 
            render={(routerProps) => <VideoUpload {...routerProps}/>}/> 
        <Route path="/videos/:id"
            render={(routerProps) => <VideoMain  {...routerProps}/>}/>
          
      </Switch>
    </div>
  );
}

export default App;
