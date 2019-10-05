import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

import WebFont from 'webfontloader';

import './index.css'

WebFont.load({
  google: {
    families: ['Lato:300,400,900', 'sans-serif']
  }
});

ReactDOM.render(<App />, document.getElementById('root'))