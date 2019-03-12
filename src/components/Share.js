import React from 'react';
import facebook from '../images/facebook.png'
import google from '../images/google.png'
import twitter from '../images/twitter.png'

class Share extends React.Component {
  render() {
    return (
      <div>
        Share:
        <a href="https://www.facebook.com/sharer/sharer.php?u=My%20weather%20forecast!">
          <img src={facebook} alt="" />
        </a>
        <a href="https://twitter.com/home?status=My%20weather%20forecast!">
          <img src={twitter} alt="" />
        </a>
        <a href="https://plus.google.com/share?url=My%20weather%20forecast!">
          <img src={google} alt="" />
        </a>
      </div>
    );
  } 
}

export default Share;