import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import '../index.css';
import Header from '../components/Header';
import ZipCode from '../components/ZipCode';
import Forecast from './Forecast';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={ZipCode} />
          <Route path="/:zipcode/forecast" component={Forecast} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
