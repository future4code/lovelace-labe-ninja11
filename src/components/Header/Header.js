import React from "react";
import { HeaderContainer } from "./styled";

const Header = (props) => {
        return(
            <HeaderContainer>
                <h2>Labeninja</h2>
                <div>
                    <button onClick={() => props.mudaTela("home")}>home</button>
                    <button onClick={() => props.mudaTela("carrinho")}>carrinho</button>
                </div>
            </HeaderContainer>
        )
}

export default Header