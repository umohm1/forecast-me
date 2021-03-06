import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';
import moment from 'moment';
import Loading from './Loading';
import { handleResponse } from '../helpers';
import Share from './Share';


let defaults = {
  icon: 'CLEAR_DAY',
  color: 'white',
  size: 400,
  animate: true
};

const REACT_APP_API = 'https://api.openweathermap.org/data/2.5/';
const REACT_APP_API_KEY = 'cb840163ca682404b16c0910853a8efa';
const REACT_APP_API_2 ='https://api.zip-codes.com/ZipCodesAPI.svc/1.0/QuickGetZipCodeDetails/';
const REACT_APP_API_KEY_2 = 'R59ORGPER5Q9IFO8F70N';

class Forecast extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    const { zipcode } = this.props.match.params;
    this.handleSubmitZipCode(zipcode);
  }

  handleSubmitZipCode = (zipcode) => {
    if (!(typeof(zipcode) === "string")) {
      zipcode = this.state.zipcode;
    }
    this.setState({
      loading: true
    });

    fetch(`${REACT_APP_API}/weather?zip=${zipcode}&appid=${REACT_APP_API_KEY}&units=imperial`)
      .then(handleResponse)
      .then(forecastData => {
        fetch(`${REACT_APP_API_2}${zipcode}?key=${REACT_APP_API_KEY_2}`)
          .then(handleResponse)
          .then(zipCodeData => {
            this.setState({
              zipCodeData,
              error: null,
              loading: false,
              forecastData: {
                name: forecastData.name,
                icon: forecastData.weather[0].icon,
                temp: parseInt(forecastData.main.temp),
                description: forecastData.weather[0].description.toUpperCase()
              }
            });
          })
          .catch(error => {
            this.setState({
              error: error.errorMessage
            });
          });
      })
      .catch(error => {
        this.setState({
          error: error.errorMessage
        });
      });
  }
  
  handleUpdateZipcode = e => {
    let zip = e.target.value;
    this.setState({
      zipcode: zip
    });
  };

  extractIcon = () => {
    switch (this.state.forecastData.icon) {
      case '01d':
        defaults.icon = 'CLEAR_DAY';
        defaults.color = 'white';
        break;
      case '01n':
        defaults.icon = 'CLEAR_NIGHT';
        defaults.color = 'white';
        break;
      case '02d':
        defaults.icon = 'PARTLY_CLOUDY_DAY';
        defaults.color = 'white';
        break;
      case '02n':
        defaults.icon = 'PARTLY_CLOUDY_NIGHT';
        defaults.color = 'white';
        break;
      case '03d':
        defaults.icon = 'CLOUDY';
        defaults.color = 'white';
        break;
      case '10d':
        defaults.icon = 'RAIN';
        defaults.color = 'white';
        break;
      case '13d':
        defaults.icon = 'SNOW';
        defaults.color = 'white';
        break;
      case '50d':
        defaults.icon = 'WIND';
        defaults.color = 'white';
        break;
      case '50d':
        defaults.icon = 'FOG';
        defaults.color = 'white';
        break;
      default:
        defaults.icon = 'RAIN';
        defaults.color = 'white';
    }
  };

  render() {
    const { forecastData, zipCodeData, error, loading } = this.state;

    if (loading) {
      return (
        <div>
          <Loading />
        </div>
      );
    }

    if (error) {
      return <div>{error}</div>;
    }

    forecastData && this.extractIcon();
    return (
      <div className="forecast">
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
          {forecastData.temp}
          <sup>o</sup>F
        </p>
        <p>{forecastData.description}</p>
        <p>{moment().format('MMMM Do, YYYY')}</p>
        <input
          placeholder="Zip Code"
          onChange={this.handleUpdateZipcode}
          type="text"
          value={this.state.zipcode}
          className="zip-container2"
        />
        <button
          onClick={this.handleSubmitZipCode}
          disabled={!this.state.zipcode}
          className="zip-btn2"
        >
          Get Forecast
        </button>
        <div className="share2">
          <Share />
        </div>
      </div>
    );
  }
}

export default Forecast;