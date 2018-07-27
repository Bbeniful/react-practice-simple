import React, { Component } from 'react';
import styled, {keyframe} from 'styled-components';
import Links from './Links';
const simpleWhite = styled.div`
  color: white;
`;

class Home extends Component {
    render() {
      return (
        <div>
          <Links/>
          <simpleWhite>Home</simpleWhite>
        </div>
      )
    }
  }

  export default Home