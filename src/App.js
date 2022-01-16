// import React, { useState, useEffect } from 'react';
import './App.css';
import Main from './components/Home'
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";


const App = () => {
  return (
    <div className='container mt-5'>
      
      <Main>  </Main>
    </div>
    // <div className="App">
    //     <BrowserRouter>
    //       <Routes />
    //     </BrowserRouter>
    // </div>   
  );
};

export default App;
