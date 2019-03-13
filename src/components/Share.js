import React from 'react';
import linkedin from '../images/linkedin.svg'
import pinterest from '../images/pinterest.svg'
import twitter from '../images/twitter.svg'

class Share extends React.Component {
  render() {
    return (
      <div className="shareIcons">
        <a href="https://www.linkedin.com/shareArticle?mini=true&url=My%20weather%20forecast&title=&summary=&source=">
          <img src={linkedin} alt="linkedin" width="70" height="50" className="linkedin" />
        </a>
        <a href="https://twitter.com/home?status=My%20weather%20forecast!">
          <img src={twitter} alt="" width="70" height="50" className="twitter" />
        </a>
        <a href="https://pinterest.com/pin/create/button/?url=&media=My%20weather%20forecast!&description=">
          <img src={pinterest} alt="" width="70" height="50" className="pinterest"/>
        </a>
      </div>
    );
  } 
}

export default Share;