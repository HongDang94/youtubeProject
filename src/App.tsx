import './App.css';
import SearchBar from './components/Search';
import YoutubeList from './components/Youtube/YoutubeList';

function App() {
  return (
    <div className="App">
      <SearchBar placeholder='tim kiem' value=''/>
      <div style={{display: "flex"}}>
        <div style={{width: "70%"}}>
          
        </div>
        <div style={{width: "30%"}}>
          <YoutubeList />
        </div>
      </div>
    </div>
  );
}

export default App;
