import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import ZipCode from './Components/ZipCode';
import CitySearch from './Components/CitySearch';



function App() {
  return ( 
    <div className="App">
      <div className="App-header">
          <h1>Zip Code and City Search</h1>
      </div>
      <br></br>
      <ZipCode />
      <br></br>
      <CitySearch />
    </div>
    
  );
}

export default App;