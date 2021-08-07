import React from "react";
import { Card } from "./styled";
import Axios from "axios";

const CardTrabalho = () => {

    return(
        <Card>
            <h3>Titulo:</h3>
            <p><b>preco:</b> 20</p>
            <p><b>prazo:</b> 20/02/2022</p>
            <button>detalhes</button>
            <button>adicionar ao carrinho</button>
        </Card>
    )
}

export default CardTrabalho