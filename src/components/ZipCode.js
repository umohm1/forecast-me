import React from 'react';

class ZipCode extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      zipcode: '',
    };
  }

  handleSubmitZipCode = () => {
    this.props.history.push(`${this.state.zipcode}/forecast`)
  }

  handleUpdateZipcode = (e) => {
    let zip = e.target.value;
    this.setState({
      zipcode: zip
    })
  }

  render() {
    return (
      <div>
        <input
          placeholder='Zip Code' 
          onChange={this.handleUpdateZipcode}
          type='text'
          value={this.state.zipcode}
          /> 
        <button
          onClick={this.handleSubmitZipCode}
          disabled={!this.state.zipcode}
          >
          Get Forecast
          </button>
      </div>
    );
  }
}

export default ZipCode;