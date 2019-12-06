import React from 'react';
import ReactDOM from 'react-dom';
import Favicon from 'react-favicon';
import {HashRouter} from "react-router-dom";
import App from './App';

ReactDOM.render(
<div>
  <HashRouter>
    <Favicon url="http://icons.iconarchive.com/icons/martz90/circle/16/video-camera-icon.png" />
    <App />
  </HashRouter>
</div>
, document.getElementById('root'));
