import { Dispatch } from "redux";
import Api from "../../axios/api";
import {
  LIMIT,
  PokemonDispatchTypes,
  POKEMON_SUCCESS,
} from "../allPokemons/actionTypes";
import { getAllPokemonDetails } from "../allPokemons/AllPokemonsActions";
import {
  PokemonSearchDispatchTypes,
  POKEMON_SEARCH_DATA_FETCH_SUCCESS,
} from "./actionTypes";

export const fetchAllPokemons = (limit = LIMIT, offset: number) => async (
  dispatch: Dispatch<PokemonSearchDispatchTypes>
): Promise<void> => {
  const allPokemons = await Api.getPokemonsByPage({ offset, limit });
  dispatch({
    type: POKEMON_SEARCH_DATA_FETCH_SUCCESS,
    payload: allPokemons.data.results,
  });
};

export const getSearchoptionData = (allUrls: string[]) => async (
  dispatch: Dispatch<PokemonDispatchTypes>
): Promise<void> => {
  const res = await getAllPokemonDetails(allUrls);
  dispatch({ type: POKEMON_SUCCESS, payload: res, count: allUrls.length });
};
