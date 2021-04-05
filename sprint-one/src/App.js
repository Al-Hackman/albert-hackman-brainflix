import './App.css';
import Header from './components/Header/Header';
import './styles/global.scss';
import VideoMain from './components/NestedComponents/VideoMain';

function App() {
  return (
    <div className="App">
      <Header />
      <VideoMain />  
    </div>
  );
}

export default App;
