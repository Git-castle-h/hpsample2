
import {Header} from './pages/header.js';
import {Main, main} from './pages/main.js';
import {Skip} from './pages/skip.js';
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './css/font.css';
import './css/App.css';
import './css/nomalize.css';
import './css/header.css';
import './css/main.css';

function App() {
  return (
    <div className="App">    
      <BrowserRouter>
      <Routes>
        <Route path ='/' element={<MainPage></MainPage>}></Route>
      </Routes>
      </BrowserRouter>
    </div>

  );
}

function MainPage(){
  return(
    <div className="MainPage">
    <Skip></Skip>
    <Header></Header>
    <Main></Main>
    </div>
  )
}

export default App;
