import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';
import moment from 'moment';
import { handleResponse } from '../helpers';

let defaults = {
  icon: 'CLEAR_DAY',
  color: 'goldenrod',
  size: 512,
  animate: true
};

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
    
    fetch(`${ process.env.REACT_APP_API}/weather?zip=${zipcode}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`)
      .then(handleResponse)
      .then(forecastData => {
        this.setState({
          forecastData: {
            name: forecastData.name,
            icon: forecastData.weather[0].icon,
            temp: forecastData.main.temp,
            description: forecastData.weather[0].description
          },
          error: null
        });
      })
      .catch(error => {
        this.setState({
          error: error.errorMessage
        });
      });
  }

  extractIcon = () => {
    switch (this.state.forecastData.icon) {
      case '01d':
        defaults.icon = 'CLEAR_DAY';
        defaults.color = 'goldenrod';
        break;
      case '01n':
        defaults.icon = 'CLEAR_NIGHT';
        defaults.color = 'goldenrod';
        break;
      case '02d':
        defaults.icon = 'PARTLY_CLOUDY_DAY';
        defaults.color = 'goldenrod';
        break;
      case '02n':
        defaults.icon = 'PARTLY_CLOUDY_NIGHT';
        defaults.color = 'goldenrod';
        break;
      case '03d':
        defaults.icon = 'CLOUDY';
        defaults.color = 'goldenrod';
        break;
      case '03n':
        defaults.icon = 'CLOUDY';
        defaults.color = 'goldenrod';
        break;
      default:
        defaults.icon = 'RAIN';
        defaults.color = 'goldenrod';
  }
}


    render() {
      const { forecastData } = this.state;

      if (!Object.keys(forecastData)){
        return <div>Loading.....</div>
      }
      this.extractIcon()
      console.log(defaults)
      return (
        <div>
          <h1>{forecastData.name}</h1>
          <ReactAnimatedWeather
            icon={defaults.icon}
            color={defaults.color}
            size={defaults.size}
            animate={defaults.animate}
          />
          <p>{forecastData.temp}</p>
          <p>{forecastData.description}</p>
          <p>{moment().format('MMMM Do YYYY')}</p>
        </div>
      );
    }
  }

export default Forecast;