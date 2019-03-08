import React from 'react';

class ZipCode extends React.Component {
  constructor() {
    super();

    this.state = {
      zipcode: '',
    };
  }

  handleSubmitZipCode = () => {
    
  }

  render() {
    return (
      <div>
        <input
          placeholder='ZipCode' /> 
          <button>
            Get Forecast
          </button>
      </div>
    );
  }
}

export default ZipCode;