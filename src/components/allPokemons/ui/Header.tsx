import React from "react";
import PokemonLogo from "../../../assets/pokemon.png";
import { headerStyles } from "./styles";

const Header: React.FC = () => {
  return (
    <header style={headerStyles.containerStyle}>
      <img src={PokemonLogo} style={headerStyles.imageStyle} />
    </header>
  );
};

export default Header;
