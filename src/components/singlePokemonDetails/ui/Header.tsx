import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PokemonLogo from "../../../assets/pokemon.png";
import { detailsScreenHeaderStyles } from "./styles";

const DetailsHeader = () => {
  interface LocationState {
    from?: string;
  }

  const navigate = useNavigate();
  let location = useLocation();
  let state = location.state as LocationState | null;

  return (
    <AppBar style={detailsScreenHeaderStyles.appBarContainer}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          onClick={() => navigate(`/pokemons/page/${state?.from ?? "1"}`)}
          aria-label="close"
        >
          <ArrowBackIcon style={detailsScreenHeaderStyles.ArrowBackIcon} />
        </IconButton>
        <div style={detailsScreenHeaderStyles.appBarLogoContainer}>
          <img
            src={PokemonLogo}
            style={detailsScreenHeaderStyles.appBarLogo}
            onClick={() => navigate("/")}
            alt="pokemon logo"
          />
        </div>
        <button
          onClick={() => navigate(`/pokemons/page/${state?.from ?? "1"}`)}
          aria-label="close"
          style={detailsScreenHeaderStyles.closeButtonStyle}
        >
          <span style={detailsScreenHeaderStyles.closeButtonText}>
            <b>Back</b>
          </span>
        </button>
      </Toolbar>
    </AppBar>
  );
};

export default DetailsHeader;
