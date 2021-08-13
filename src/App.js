import React from "react";
import TelaCarrinho from "./Telas/TelaCarrinho/TelaCarrinho";
import TelaHome from "./Telas/TelaHome/TelaHome";
import TelaCadastro from "./Telas/TelaCadastro/TelaCadastro";
import TelaDetalhes from "./Telas/TelaDetalhes/TelaDetalhes";
import TelaListaTrabalho from "./Telas/TelaListaTrabalho/TelaListaTrabalho";
import Header from "./components/Header/Header";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    min-height: 100vh;
  }
`;


export default class App extends React.Component {
  state = {
    telaAtual: "home",
  }
  
  mudaTela = (telaNome) => {
    this.setState({telaAtual: telaNome})
  }

  escolheTela = () => {
    switch (this.state.telaAtual){
      case "home":
        return <TelaHome mudaTela={this.mudaTela}/>
      case "carrinho":
        return <TelaCarrinho/>
      case "lista":
        return <TelaListaTrabalho/>
      case "detalhes":
        return <TelaDetalhes/>
      case "cadastro":
        return <TelaCadastro/>
      default:
        return <TelaHome mudaTela={this.mudaTela}/>
    }
  }


  render() {
    return ( 
      <div>
        <GlobalStyle/>
        <Header mudaTela={this.mudaTela}/>
        {this.escolheTela()}
      </div>
    )
  }
}