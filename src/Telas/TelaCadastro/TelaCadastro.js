import React from "react";
import axios from 'axios';
 
// const getCurrentDate = () => {
//     const data = new Date(Date.now())
//     const mes = ("0" + (data.getMonth() + 1)).slice(-2)
//     const ano = data.getFullYear()
//     let dia = Number(data.getDay()) + 2
//     dia = ("0" + dia.toString()).slice(-2)
  
  
//     return `${ano}-${mes}-${dia}`
//   }

export default class TelaCadastro extends React.Component {
    // state = {
    //     titulo: "",
    //     preco: "",
    //     descricao: "",
    //     formasPagato: [],
    //     prazo: getCurrentDate(),
    //   };

    // handlTitulo = (event) => {
    //     this.setState({Titulo: event.target.value})
    // }

    // handlDescricao = (event) => {
    //     this.setState({descricao: event.target.value})
    // }

    // handlInputPrazo = (event) => {
    //     this.setState({ prazo: event.target.value });

    // fazerCadastro = () => {
    //     const url = "https://labeninjas.herokuapp.com/jobs/labeninja"
    //     const body = {
    //         name: this.state.nome,
    //         email: this.state.email
    //     }
    //     const headers = {
    //         headers: {
    //             Authorization: "0dd25de0-d7a7-405a-89a6-cb595ff57d5b"
    //         }
    //     }

    //     axios.post(url, body, headers)
    //     .then((res) => {
    //         alert("serviço cadastrado")
    //         this.setState({titulo: "", preco: "", descricao: "", formasPagato: "", prazo: ""})
    //     })
    //     .catch((err) => {
    //         alert(err.response.data.message)
    //         console.log(err.response.data)
    //     })
    //     console.log(this.state)
    // }

    render() {
        return(
            <div>
                <h1>
                    cadastro
                </h1>
                {/* <button onClick={this.props.irParaLista}>Ir para lista</button>
                <h2>Cadastro</h2>
                <input 
                placeholder={"Nome"}
                value={this.state.nome}
                onChange={this.handlNome}
                />
                <input placeholder={"Email"}
                value={this.state.email}
                onChange={this.handlEmail}
                />
                <button onClick={this.fazerCadastro}>Cadastrar</button> */}
            </div>
        )
    }
}