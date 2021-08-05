import React from "react";
import styled from 'styled-components';
import Nav from './components/Header/Nav'

const AppContainer = styled.div`
  width: 100vw;
  high: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-text: center;
  border: 1px;
  border-style: solid;
`

const Body = styled.div`
  margin-top: 0px
  width: 100vw;
  high: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-text: center;
  padding: 50px;
  -moz-box-align: center;
`
const ButtonNav = styled.button`
width: 200px;
display: flex;
justify-content: space-around;
background-color: yellow;
color: black;
border: 1px solid #black;
border-radius: 6px;
`

class App extends React.Component {
  state = {

  }

  render () {
    return(
      <AppContainer>

          <Nav />
          <Body>
            <h1>LabeNinjas</h1>
            <h2>O talento certo no momento certo</h2>
            <ButtonNav>Quero encontrar um ninja!</ButtonNav>
            <ButtonNav>Quero ser um ninja!</ButtonNav>
          </Body>
          
      </AppContainer>
      
      
)
  }
  
}


export default App;