import React, { PureComponent } from 'react'
import styled, {keyframe} from 'styled-components';
import style from './style.css'

const Container = styled.div`
  color:white;
`

class Header extends React.Component {
  render () {
    return (
      <Container>
        <div className={style.container}>header</div>
      </Container>
    )
  }
}

export default header
