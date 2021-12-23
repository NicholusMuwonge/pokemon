import * as React from "react";
import { Chip, Divider, Paper, Skeleton } from "@mui/material";
import CallMadeTwoToneIcon from "@mui/icons-material/CallMadeTwoTone";
import Typography from "@mui/material/Typography";
import { pokemonDetailsType } from "../actionTypes";
import { RootStore } from "../../../redux/store";
import { useSelector } from "react-redux";
import { pokemonCardStyles } from "./styles";

const PokemonDetailsCard = ({ name, image, types }: pokemonDetailsType) => {
  const loading = useSelector(
    (centralState: RootStore) => centralState.pokemons.loading
  );
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
      <div style={pokemonCardStyles.typesContainer}>
        <i>Types</i>:{" "}
        {types ? (
          types.map((type) => (
            <Chip
              label={type.type.name}
              style={pokemonCardStyles.typeChipStyle}
              variant="outlined"
            />
          ))
        ) : (
          <Skeleton variant="text" width={200} />
        )}
      </div>
      <Paper
        style={pokemonCardStyles.bottomSection}
        elevation={1}
        // onClick={handleClickOpen}
      >
        {loading ? (
          <Skeleton variant="text" width={200} />
        ) : (
          <Typography
            style={pokemonCardStyles.nameStyle}
            color="text.secondary"
            gutterBottom
          >
            {name}
          </Typography>
        )}
        <div style={pokemonCardStyles.redirectIconContainer}>
          <CallMadeTwoToneIcon style={pokemonCardStyles.iconStyle} />
        </div>
      </Paper>
    </Paper>
  );
};

export default PokemonDetailsCard;
