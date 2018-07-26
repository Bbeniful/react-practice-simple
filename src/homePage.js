import React, { PureComponent } from 'react'
import styled, {keyframe} from 'styled-components';
import style from './style.css'

const Container = styled.div`
  width: 100%;
  height: 100px;
  color: white;
`;

class homePage extends React.Component {
  render () {
    return (
    <Container>
       <div className={style.container}>
        <header/>
        <footer/>
      </div>   
    </Container>
    )
  }
}

export default homePage
