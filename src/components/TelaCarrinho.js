import React from "react";
import styled from "styled-components";
import axios from "axios"

export default class TelaCarrinho extends React.Component {
    state = {

    }
    render () {
        return(
            <div>
                <button onClick={this.props.irParaHome}>Home</button>
                <h1>Carrinho</h1>
            </div>
        )
    }
}