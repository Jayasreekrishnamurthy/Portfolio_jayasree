import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Navbar from "./components/navbar/Navbar";
import Home from './components/Homepage/home'
import Skills from './components/Skills/Skills'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Homeproject from "./components/Homeproject/homeproject"



const App = () =>{
  return (
    <Router>
      
      <Navbar/>
      {/* <Banner/> */}
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/homeproject' element={<Homeproject/>} />
      <Route path='/skilles' element={<Skills/>} />

      </Routes>
    
    </Router>
    
  );
};
export default App;