import React from 'react';
import { Link } from 'react-router-dom';


const Loading = () => {
  return (
    <div>
      <h1>Whoops! That page isn't here</h1>
      <Link to="/">
        Back to Homepage
      </Link>
    </div>
  );
};

export default Loading;
