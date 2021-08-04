import React from "react";
import TelaCarrinho from "./components/TelaCarrinho";
import TelaHome from "./components/TelaHome";

export default class App extends React.Component {
  state = {
    telaAtual: "home",
  }

  escolheTela = () => {
    switch (this.state.telaAtual){
      case "home":
        return <TelaHome irParaCarrinho={this.irParaCarrinho}/>
      case "carrinho":
        return <TelaCarrinho irParaHome={this.irParaHome}/>
      default:
        return <div>Erro! Pagina n'ao encontrada D?</div>
    }
  }

  irParaHome = () => {
    this.setState({telaAtual:"home"})
  }

  irParaCarrinho = () => {
    this.setState({telaAtual: "carrinho"})
  }

  render() {
    return ( 
      <div>
        {this.escolheTela()}
      </div>
    )
  }
}