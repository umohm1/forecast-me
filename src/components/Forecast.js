import React from 'react';
import { handleResponse } from '../helpers';

class Forecast extends React.Component {
  constructor() {
    super();

    this.state = {
      forecastData: {},
      error: null,
    };
  }

  componentDidMount() {
    const { zipcode } = this.props.match.params;
    console.log(
      `${process.env.REACT_APP_API}/weather?zip=${zipcode}&appid=${
        process.env.REACT_APP_API_KEY
      }&units=imperial`
    );
    fetch(
      `${ process.env.REACT_APP_API
      }/weather?zip=${zipcode}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`)
      .then(handleResponse)
      .then(forecastData => {
        console.log('====api response', forecastData);
        this.setState({
          forecastData,
          error: null
        });
      })
      .catch(error => {
        this.setState({
          error: error.errorMessage
        });
      });
  }

  componentWillReceiveProps() {

  }

    render() {
      console.log(this.props)
      const { forecastData } = this.state;
      console.log("The forecast data is here: ", forecastData);
      return (
        <div>
          <h1></h1>
          
        </div>
      );
    }
  }

export default Forecast;