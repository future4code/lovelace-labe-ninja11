import React from "react";
import {TelaHomaContaner} from "./styled";
import styled from "styled-components";
import axios from "axios"


export default class TelaHome extends React.Component {
    state = {

    }
    render () {
        return (
            <TelaHomaContaner>
                <h1>labeninja</h1>
                <div>
                <button onClick={() => this.props.mudaTela("cadastro")}>quero ser um ninja</button>
                <button onClick={() => this.props.mudaTela("lista")}>contratar um ninja</button>
                </div>
            </TelaHomaContaner>
        )
    }
}