import React from 'react';
import Forecast from './Forecast';
import { handleResponse } from '../helpers';
import Share from './Share';

class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      zipcode: ''
    };
  }

  handleSubmitZipCode = () => {
   this.props.history.push(`${this.state.zipcode}/forecast`);

   this.fetchData()

    this.setState({
      zipcode: ''
    });
  };

  handleUpdateZipcode = e => {
    let zip = e.target.value;
    this.setState({
      zipcode: zip
    });
  };

  fetchData() {
    const { zipcode } = this.state;

    this.setState({
      loading: true
    });

    fetch(`${process.env.REACT_APP_API}/weather?zip=${zipcode}&appid=${process.env.REACT_APP_API_TEMP}&units=imperial`)
      .then(handleResponse)
      .then(forecastData => {

    fetch(`${process.env.REACT_APP_API_2}${zipcode}?key=${process.env.REACT_APP_API_KEY_2}`)
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
        console.log(error);
        this.setState({
          error: error.errorMessage
        });
      });
  }

  render() {
    const {zipCodeData, forecastData, error, loading } = this.state
    return (
      <div>
        <input
          placeholder="Zip Code"
          onChange={this.handleUpdateZipcode}
          type="text"
          value={this.state.zipcode}
          className="zip-container"
        />
        <button
          onClick={this.handleSubmitZipCode}
          disabled={!this.state.zipcode}
          className="zip-btn"
        >
          Get Forecast
        </button>
        {zipCodeData && forecastData && (
          <Forecast
            zipCodeData={zipCodeData}
            forecastData={forecastData}
            error={error}
            loading={loading}
          />
        )}
        <Share />
      </div>
    );
  }
}

export default Homepage;
