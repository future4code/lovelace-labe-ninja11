import React from "react";
import styled from "styled-components";


const HeaderContainer = styled.div`
    width: 100vw;
    high: 100vh;
    display: flex;
    flex-direction: column;
    background: pink;
    align-items: center;
    justify-content: space-around;
    border-style: solid;
`

const ButtonHeader = styled.button`
    width: 100px;
    display: flex;
    justify-content: space-around;
    background-color: yellow;
    color: black;
    border: 1px solid #black;
    border-radius: 6px;
`

// aqui deve linkar com o carrinho que será feito
const Header = () => {
    return (
        <HeaderContainer>
            <h1>LabeNinjas</h1>
        <div>
            <ButtonHeader>Home</ButtonHeader>
            <ButtonHeader>Carrinho</ButtonHeader>
            
        </div>
        
        </HeaderContainer>
    )
}

export default Header;