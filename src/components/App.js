import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../index.css';
import Header from './Header';
import Homepage from './Homepage';
import Forecast from './Forecast';
import Loading from './Loading';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/:zipcode/forecast" component={Forecast} />
            <Route component={Loading} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
