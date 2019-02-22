import React from 'react';
import ReactDOM from 'react-dom';

import './myStyles.scss';

const App = () => {
  return (
    <div className="app">
      <img alt="header" src="/dist/images/header.jpg" className="app-header" />
      <p>
        We are a most promising species, Mr. Spock, as predators go. Did you know that? I frequently
        have my doubts. I dont. Not any more. And maybe in a thousand years or so, we will be able
        to prove it.
      </p>
      <p>- Captain Kirk</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));