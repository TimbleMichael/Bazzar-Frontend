import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Homepage from './components/Homepage';
import Signin from './components/Signin';
import RecipePage from './components/RecipePage';
import Signup from './components/Signup';



class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>} exact />
          <Route path="/Signin" element={<Signin/>} exact />
          <Route path="/Signup" element={<Signup/>} exact />
          <Route path="/RecipePage" element={<RecipePage/>} exact />
        </Routes>
      </BrowserRouter>
    )
  }
}


export default App;
