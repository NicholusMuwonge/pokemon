import * as React from "react";
import { Chip, Paper, Skeleton } from "@mui/material";
import CallMadeTwoToneIcon from "@mui/icons-material/CallMadeTwoTone";
import Typography from "@mui/material/Typography";
import { pokemonDetailsType } from "../actionTypes";
import { RootStore } from "../../../redux/store";
import { useSelector } from "react-redux";
import { pokemonCardStyles } from "./styles";
import { useNavigate, useParams } from "react-router-dom";

const PokemonDetailsCard = ({ name, image, types }: pokemonDetailsType) => {
  const loading = useSelector(
    (centralState: RootStore) => centralState.pokemons.loading
  );
  const navigate = useNavigate()
  const {page} = useParams()
  
  return (
    <Paper
      className="parent"
      elevation={6}
      style={pokemonCardStyles.cardContainer}
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
        onClick={()=>navigate(`/pokemon/${name}`,  {state: {from: page??'1'}})}
      >
        <div style={pokemonCardStyles.typesContainer}>
        <b style={{marginRight: "5%"}}>Types</b>{"  "}
        {types ? (
          types.map((type) => (
            <Chip
              label={type.type.name}
              style={pokemonCardStyles.typeChipStyle}
              variant="outlined"
              key={`${type.type.name}`}
            />
          ))
        ) : (
          <Skeleton variant="text" width={200} height={50} />
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
