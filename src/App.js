import React from "react";
import styled from 'styled-components';
import Nav from './components/Header/Nav'

const AppContainer = styled.div`
  width: 100vw;
  high: 100vh;
  display: flex;
  flex-direction: column;
  background: pink;
  align-items: center;
  justify-content: space-around;
  border: 2px;
  border-style: solid;
  
`

class App extends React.Component {
  state = {

  }

  render () {
    return(
      <AppContainer>
          <Nav />
      </AppContainer>
      
      
)
  }
  
}


export default App;