import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import '../index.css';
import Header from '../components/Header';
import ZipCode from '../components/ZipCode';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header /> 
          <ZipCode />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
