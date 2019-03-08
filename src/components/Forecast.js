import React from 'react';
import { handleResponse } from './helpers';

class Forecast extends React.Component {
  constructor() {
    super();

    this.state = {
      forecastData: {},
      error: null,
    };
  }

  fetch(`${process.env.WEATHER_APP_API}/weather?zip=${zip code},${country code}&units=imperial`);
    .then(handleResponse)
    .then((forecastData) => {
      this.setState({
        forecastData,
        error: null,
      });
    })
    .catch((error) => {
      this.setState({
        error: error.errorMessage,
      });
    });

    render() {
      const { forecastData } = this.state;
      console.log("The forecast data is here: ", forecastData);
      return (

      )
    }
  }

export default Forecast;