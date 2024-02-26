import logo from './logo.svg';
import './App.scss';
import  Header  from './shared/Header/Header.jsx';

import Overview from './components/Overview/Overview.jsx';
import Rewire from './components/Rewire/Rewire.jsx';
import Home from './components/Home/Home.jsx';
import Rewirereplace from './components/Rewire/Rewirereplace.jsx';
import { Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
       <Route exact path='/' element={<Rewirereplace/>}></Route>
        <Route exact path='/overview' element={<Overview/>}></Route>
        <Route exact path='/rewire' element={<Rewire/>}></Route>
        <Route exact path='/home' element={<Home/>}></Route>
      </Routes>
      
    </div>

  );
}

export default App;
