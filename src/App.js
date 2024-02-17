import { Link } from "react-router-dom";
import{ BrowserRouter, Routes, Route, } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

import './scss/components/style.scss';


import Header from './components/Home/header';
import HeaderNavigation from './components/Home/headerNavigation';
import HeaderCategory from './components/Home/headerCategory';
import Footer from './components/Home/footer';
import Page from './components/Home/index';
import Page2 from './components/HomeFilter/index2';
import Page3 from './components/Kartochka/index3';

function App() {
  return (
    <div className='wrapper'>
      <Header/>
      <HeaderNavigation/>
      <HeaderCategory/>
      <div className="content">
          <Routes>
            <Route path="/" element={<Page/>}/>
            <Route path="/index2" element={<Page2/>}/>
            <Route path="/index3" element={<Page3/>}/>

          </Routes>
        
        

      </div>
      <Footer/>
    </div>
  );
}

export default App;
