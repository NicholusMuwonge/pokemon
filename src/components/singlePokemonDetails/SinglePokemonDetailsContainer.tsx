import * as React from "react";
import { useSelector } from "react-redux";
import { RootStore } from "../../redux/store";
import { pokemonDetailsType } from "../allPokemons/actionTypes";
import SinglePokemonDetails from "./ui/SinglePokemonDetails";
import { useParams } from "react-router-dom";

const SinglePokemonDetailsContainer = () => {
  let { pokemonName } = useParams();
  const allPokemons = useSelector(
    (centralState: RootStore) => centralState.pokemons.results
  );
  const [pokemon, setPokemonData] = React.useState<pokemonDetailsType>({});
  React.useEffect(() => {
    const specificPokemon = allPokemons.findIndex(
      (pokemonObj) => pokemonObj.name === pokemonName
    );
    if (specificPokemon > -1) {
      setPokemonData(allPokemons[specificPokemon]);
    }
  }, [allPokemons, pokemonName]);
  return <SinglePokemonDetails pokemon={pokemon} />;
};

export default SinglePokemonDetailsContainer;
