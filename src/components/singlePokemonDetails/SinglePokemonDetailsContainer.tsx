import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../redux/store";
import {
  pokemonDetailsType,
} from "../allPokemons/actionTypes";
import SinglePokemonDetails from "./ui/SinglePokemonDetails";
import { useParams } from "react-router-dom";
import NotFound from "../notFound/NotFound";
import { getPokemonDetailsByName } from "./singlePokemonDetailsAction";

const SinglePokemonDetailsContainer = () => {
  let { pokemonName } = useParams();
  const allPokemons = useSelector(
    (centralState: RootStore) => centralState.pokemons.results
  );
  const [pokemon, setPokemonData] = React.useState<pokemonDetailsType>({});
  const dispatch = useDispatch();
  const [notFound, setNotFound] = React.useState<boolean>(false);
  React.useEffect(() => {
    const specificPokemon = allPokemons.findIndex(
      (pokemonObj) => pokemonObj.name === pokemonName
    );
    if (specificPokemon > -1) {
      setPokemonData(allPokemons[specificPokemon]);
    }

    if (specificPokemon === -1) {
      dispatch(getPokemonDetailsByName(pokemonName!, setNotFound));
    }
  }, [allPokemons, pokemonName, dispatch]);
  return (
    <>{notFound ? <NotFound /> : <SinglePokemonDetails pokemon={pokemon} />}</>
  );
};

export default SinglePokemonDetailsContainer;
