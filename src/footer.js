import React, { PureComponent } from 'react'
import styled, {keyframes} from 'styled-components';
import style from './style.css'

const Container = styled.div`
  color: blue;
  &:hover{
    color: white;
  }
`



class Footer extends PureComponent {
  render () {
    return (
      <Container className={style.container}>footer</Container>
    )
  }
}

export default Footer
