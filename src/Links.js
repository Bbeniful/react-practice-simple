import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const Wrapper = styled.div`
  margin-top:50px;
  color: white;
`;

class Links extends Component {
    render() {
      return (
        <Wrapper className="container">
          <div className="row">
            <div className="col text-center">
                <Link to="/about">AbouteMe</Link> 
            </div>
            <div className="col text-center">
                <Link to="/contact">Contact</Link> 
            </div>
            <div className="col text-center">
                <Link to="/">Home</Link> 
            </div>
          </div>
        </Wrapper>
      )
    }
  }

  export default Links