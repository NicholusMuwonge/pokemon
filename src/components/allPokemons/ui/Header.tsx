import React from "react";
import { useNavigate } from "react-router-dom";
import PokemonLogo from "../../../assets/pokemon.png";
import { headerStyles } from "./styles";

const Header: React.FC = () => {
  const navigate = useNavigate()
  return (
    <header style={headerStyles.containerStyle}>
      <img 
      src={PokemonLogo} style={headerStyles.imageStyle} 
      alt="pokemon logo" 
      onClick={()=>navigate('/')}
      />
    </header>
  );
};

export default Header;
