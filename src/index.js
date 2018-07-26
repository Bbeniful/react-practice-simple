import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Links from './Links'

import MyFooter from './MyFooter';

import Home from './Home'
import AboutMe from './AboutMe';

ReactDOM.render((
    <App/>
), document.getElementById('root'));
registerServiceWorker();
