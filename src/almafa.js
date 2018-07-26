import React, { Component } from 'react';
import styled, {keyframe} from 'styled-components';
const simpleWhite = styled.div`
  color: white;
`;

class Welcome extends React.Component {
    render() {
      return (
        <simpleWhite>Hello, {this.props.name}</simpleWhite>
      )
    }
  }

  export default Welcome