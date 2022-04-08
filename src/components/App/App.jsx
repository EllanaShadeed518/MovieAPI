import logo from './../../logo.svg';
import './App.css';
import Navbar from './../Navbar/Navbar';
import Home from '../Home/Home';
import Movies from './../Movies/Movies';
import Tvshows from '../Tvshows/Tvshows';
import People from '../People/People';

import Login from './../Login/Login';
import Register from '../Register/Register';
import Notfound from '../Notfound/Notfound';
import About from './../About/About';
import { Routes,Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Navbar />
    <div className="container">
    <Routes>
      <Route path='/' element={<Home/>}></Route>
    <  Route path='Home' element ={<Home/>
     } />
    < Route path='Movies' element={<Movies/>} />
    < Route path='Tvshows' element={<Tvshows/>} />
    < Route path='People' element={<People/>} />
    < Route path='About' element={<About/>} />
    < Route path='Login' element={<Login/>} />
    < Route path ='Register' element={<Register/>} />
    < Route path='*' element ={<Notfound />}/></Routes></div>
    
    
    </>
  );
}

export default App;
