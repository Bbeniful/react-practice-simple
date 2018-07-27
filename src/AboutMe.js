import React, { Component } from 'react';
import styled, {keyframe} from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const simpleWhite = styled.div`
  color: white;
`;

class AboutMe extends Component {
    render() {
      return (
        <simpleWhite><Link to="/">About Me</Link></simpleWhite>
      )
    }
  }

  export default AboutMe