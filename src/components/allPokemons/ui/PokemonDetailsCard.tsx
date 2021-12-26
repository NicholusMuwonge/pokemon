import * as React from "react";
import { Chip, Paper, Skeleton } from "@mui/material";
import CallMadeTwoToneIcon from "@mui/icons-material/CallMadeTwoTone";
import Typography from "@mui/material/Typography";
import { pokemonDetailsType } from "../actionTypes";
import { RootStore } from "../../../redux/store";
import { useSelector } from "react-redux";
import { pokemonCardStyles } from "./styles";
import { useNavigate, useParams } from "react-router-dom";

const PokemonDetailsCard = ({ name, image, abilities }: pokemonDetailsType) => {
  const loading = useSelector(
    (centralState: RootStore) => centralState.pokemons.loading
  );
  const navigate = useNavigate()
  const {page} = useParams()
  
  return (
    <Paper
      className="pokemon-card"
      elevation={6}
      style={pokemonCardStyles.cardContainer}
      onClick={()=>navigate(`/pokemon/${name}`,  {state: {from: page??'1'}})}
    >
      <div style={pokemonCardStyles.imageTileContainer}>
        {loading ? (
          <Skeleton
            variant="rectangular"
            width={500}
            height={200}
            style={pokemonCardStyles.skeletonLoaderStyle}
          />
        ) : (
          <img
            src={image}
            style={pokemonCardStyles.imageStyle}
            alt={`${name}`}
          />
        )}
      </div>
      {loading ? (
        <Skeleton variant="text" width={200} height={50} style={{marginLeft: "5%"}} />
      ) : (
        <Typography
          style={pokemonCardStyles.nameStyle}
          color="text.secondary"
          gutterBottom
        >
          {name}
        </Typography>
      )}
      <Paper
        style={pokemonCardStyles.bottomSection}
        elevation={0}
      >
        <div style={pokemonCardStyles.typesContainer}>
        <b style={{marginRight: "2%"}}>Ability</b>{"  "}
        {abilities ? (
          abilities.map((ability) => (
            <Chip
              label={ability.ability.name}
              style={pokemonCardStyles.typeChipStyle}
              variant="outlined"
              key={`${ability.ability.name}`}
            />
          ))
        ) : (
          <Skeleton variant="text" width={180} height={50} />
        )}
      </div>
        <div style={pokemonCardStyles.redirectIconContainer}>
          <CallMadeTwoToneIcon style={pokemonCardStyles.iconStyle} />
        </div>
      </Paper>
    </Paper>
  );
};

export default PokemonDetailsCard;
