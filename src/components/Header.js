import React from 'react';
import sunshine from '../images/sunshine.svg'

const Header = () => {
  return (
    <div className="homepage">
      <p>Forecast Me</p>
      <div>
        <p>How's The Weather?</p>
        <img src={sunshine} alt="" width="100" height="100" />
        <p>
          80<sup>o</sup>F
        </p>
      </div>
    </div>
  );
}

export default Header;