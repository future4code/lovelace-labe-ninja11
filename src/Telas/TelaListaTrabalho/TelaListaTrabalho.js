import React from "react";
import styled from "styled-components";
import axios from "axios"
import CardTrabalho from "../../components/CardTrabalho/CardTrabalho";
import { BASE_URL, headers } from "../../constats/urls";

export default class TelaListaTrabalho extends React.Component {
    state = {
        listaTrabalho: []
    }

    componentDidMount() {
        this.pegaTrabalho()
    }
    
    pegaTrabalho = () => {
        axios.get(`${BASE_URL}/jobs`, headers)
        .then((res) => {
            console.log(res)
        })
        .catch((err) =>{
            alert(err.response.data.message)
        })
    }
    render () {
        return(
            <div>
                <CardTrabalho/>
            </div>
        )
    }
}