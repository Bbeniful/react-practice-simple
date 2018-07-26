import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';
import styled, {keyframe} from 'styled-components';
import MyFooter from './MyFooter';
import Links from './Links';


import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Contact from './Contact';
import AboutMe from './AboutMe';
import Home from './Home';


const Wrapper = styled.div`
  height: 150px;
  width: 100%;
  color: white;
  background-color: black;
`;

class App extends Component {
  render() {
    return (
         <Wrapper>
            <Router>
              <div>
              <Links/>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={AboutMe} />
                <Route path="/contact" component={Contact} />
              </div>
            </Router>
        </Wrapper>
    );
  }
}

export default App;
