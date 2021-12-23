import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Slide, { SlideProps } from "@mui/material/Slide";
import { Chip, Paper } from "@mui/material";
import DetailsAccordion from "./Accordion";
import species from "../../../assets/alien.png";
import weights from "../../../assets/weight.png";
import CircularProgressWithLabel from "./Progress";
import TypesIcon from "../../../assets/options.png";
import Header from "./Header";
import { pokemonDetailsType } from "../../allPokemons/actionTypes";
import { pokemonDetialItemStyles, singlePokemonDetailsStyles } from "./styles";

const Transition = React.forwardRef<unknown, SlideProps>((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

const PokemonDetialItem = ({
  icon,
  children,
  title
}: {
  icon: string;
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <>
      <div style={pokemonDetialItemStyles.container}>
        <div style={pokemonDetialItemStyles.descriptionContainer}>
          <IconButton>
            <img src={icon} 
            style={pokemonDetialItemStyles.iconStyle} 
            alt="description icon"
            />
          </IconButton>
          <b style={pokemonDetialItemStyles.titleStyle}>{title}</b>
        </div>
        <div style={pokemonDetialItemStyles.valueContainer}>{children}</div>
      </div>
      <Divider style={pokemonDetialItemStyles.dividerStyle} />
    </>
  );
};

const SinglePokemonDetails = ({pokemon}:{pokemon: pokemonDetailsType}) => {

  return (
    <div>
      <Dialog fullScreen open TransitionComponent={Transition}>
        <Header />
        <section style={singlePokemonDetailsStyles.pokemonImageContainer}>
          <img
            src={`${pokemon.image}`}
            style={singlePokemonDetailsStyles.pokemonImage}
            alt="pokemon"
          />
        </section>
        <section style={singlePokemonDetailsStyles.detailsSectionContainer}>
          <Paper style={singlePokemonDetailsStyles.detailsSubContainerStyles}>
            <Typography
              style={singlePokemonDetailsStyles.title}
              color="text.secondary"
            >
              {pokemon.name}
            </Typography>
            <Divider />
            <PokemonDetialItem
              icon={species}
              children={<>{pokemon?.species?.name}</>}
              title="Species"
            />
            <PokemonDetialItem
              icon={weights}
              children={<>{pokemon?.weight}</>}
              title="Weight"
            />
            <PokemonDetialItem
              icon={TypesIcon}
              title="Types"
              children={
                <>
                  {pokemon.types
                    ? pokemon.types.map((type) => (
                        <Chip
                          label={type.type.name}
                          style={singlePokemonDetailsStyles.typesChip}
                          variant="outlined"
                          key={`${type.type.name}`}
                        />
                      ))
                    : null}
                </>
              }
            />
          </Paper>
          <DetailsAccordion
            title="Moves"
            children={
              <div style={singlePokemonDetailsStyles.movesContainer}>
                {pokemon.moves
                  ? pokemon.moves.map((move) => (
                      <Chip
                        label={move.move.name}
                        key={`${move.move.name}`}
                        style={singlePokemonDetailsStyles.movesChip}
                        variant="outlined"
                      />
                    ))
                  : null}
              </div>
            }
          />
          <DetailsAccordion
            title="Stats"
            children={
              <div style={singlePokemonDetailsStyles.statsContainer}>
                {pokemon.stats
                  ? pokemon.stats.map((stat) => (
                      <span key={`${stat.stat.name}`}>
                        <div
                          style={singlePokemonDetailsStyles.statsSubContainer}
                        >
                          <div style={singlePokemonDetailsStyles.statName}>
                            <b
                              style={{
                                textTransform: "capitalize" as const,
                                textAlign: "left" as const,
                              }}
                            >
                              {stat.stat.name}
                            </b>
                          </div>
                          <div style={singlePokemonDetailsStyles.statNumber}>
                            <CircularProgressWithLabel value={stat.base_stat} />{" "}
                          </div>
                        </div>
                        <Divider
                          style={singlePokemonDetailsStyles.statDivider}
                        />
                      </span>
                    ))
                  : null}
              </div>
            }
          />
        </section>
      </Dialog>
    </div>
  );
};

export default SinglePokemonDetails;
