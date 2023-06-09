import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import "./App.css"
import RowPost from "./Components/RowPost/RowPost";
import { originals,action} from './url'


function App() {
  return (
    <div className="App">
       <NavBar/>
      <Banner/>
      <RowPost  url ={originals} title='Netflix Originals'/>
      <RowPost url={action} title= 'Action' isSmall/>
    </div>
  );
}

export default App;
