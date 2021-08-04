import React from "react";
import styled from "styled-components";
import axios from "axios"

export default class TelaHome extends React.Component {
    state = {

    }
    render () {
        return (
            <div>
                <button onClick={this.props.irParaCarrinho}>ir para carrinho</button>
                <h1>Home</h1>
            </div>
        )
    }
}