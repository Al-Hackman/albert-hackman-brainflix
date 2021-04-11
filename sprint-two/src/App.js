import {Switch, Route} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import './styles/global.scss';
import VideoMain from './components/VideoMain/VideoMain';
import VideoList from './components/VideoList/VideoList'
import VideoUpload from './components/VideoUpload/VideoUpload'


function App() {
  return (
    <div className="App">
            <Header />
      <Switch>
        <Route path="/" exact>
            <VideoMain />
        </Route>
        <Route path="/upload" component={VideoUpload}/>
        <Route path="/videos/:id"
            render={(routerProps) => <VideoMain  {...routerProps}/>}/>
          
      </Switch>
    </div>
  );
}

export default App;
