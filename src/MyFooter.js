import React, { Component } from 'react';
import styled, {keyframe} from 'styled-components';
import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom';

const Wrapper = styled.div`
    background-color: white;
    color: black;

    &:hover{
        background-color: black;
        color: white;
    }
`;


const footer = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    /* Set the fixed height of the footer here */
    height: 60px;
    line-height: 60px; /* Vertically center the text there */
    background-color: #f5f5f5;
`;

class MyFooter extends Component {
    render() {
      return (
            <footer>
                <div className="container">
                    <div className="row">
                    <div className="col">
                        <Link to="/about">AbouteMe</Link> 
                    </div>
                    <div className="col">
                        <Link to="/contact">Contact</Link> 
                    </div>
                    <div className="col">
                    <Link to="/">Home</Link> 
                    </div>
                    </div>
                </div>
            </footer>
      )
    }
  }

  export default MyFooter