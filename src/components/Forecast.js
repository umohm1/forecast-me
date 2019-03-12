import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';
import moment from 'moment';
import Loading from './Loading';


let defaults = {
  icon: 'CLEAR_DAY',
  color: 'goldenrod',
  size: 512,
  animate: true
};

class Forecast extends React.Component {
  extractIcon = () => {
    switch (this.props.forecastData.icon) {
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
      case '10d':
        defaults.icon = 'RAIN';
        defaults.color = 'goldenrod';
        break;
      case '13d':
        defaults.icon = 'SNOW';
        defaults.color = 'goldenrod';
        break;
      case '50d':
        defaults.icon = 'WIND';
        defaults.color = 'goldenrod';
        break;
      case '50d':
        defaults.icon = 'FOG';
        defaults.color = 'goldenrod';
        break;
      default:
        defaults.icon = 'RAIN';
        defaults.color = 'goldenrod';
    }
  }


    render() {
      const { forecastData, zipCodeData, error, loading } = this.props;

      if (loading) {
        return <div><Loading /></div>
      }

      if (error) {
        return <div>{error}</div>;
      }
      
      this.extractIcon()
      return (
        <div>
          <h1>
            {forecastData.name}, {zipCodeData.State}
          </h1>
          <ReactAnimatedWeather
            icon={defaults.icon}
            color={defaults.color}
            size={defaults.size}
            animate={defaults.animate}
          />
          <p>
            {forecastData.temp}<sup>o</sup>F
          </p>
          <p>{forecastData.description}</p>
          <p>{moment().format('MMMM Do, YYYY')}</p>
        </div>
      );
    }
  }

export default Forecast;