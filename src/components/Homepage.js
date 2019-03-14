import React from 'react';
import Share from './Share';
import sunshine from '../images/sunshine.svg';

class Homepage extends React.Component {
  state = {
    zipcode: ""
  }

  handleSubmitZipCode = () => {
   this.props.history.push(`${this.state.zipcode}/forecast`);

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

  render() {
    return (
      <div>
        <div className="homepage">
          <p>How's The Weather?</p>
          <img src={sunshine} alt="" width="100" height="100" />
          <p>
            80<sup>o</sup>F
          </p>
        </div>
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
        <Share />
      </div>
    );
  }
}

export default Homepage;
