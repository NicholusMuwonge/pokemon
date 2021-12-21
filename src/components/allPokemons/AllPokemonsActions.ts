import { Dispatch } from "redux";
import {
  POKEMON_FAIL,
  POKEMON_LOADING,
  POKEMON_SUCCESS,
  PokemonDispatchTypes,
  resultsType,
} from "./actionTypes";
import Api from "../../axios/api";
import axios, { AxiosResponse } from "axios";

const getExtraDetails = (arr: resultsType) => {
  let updatedResult: resultsType = {
    count: arr.count,
    allUrls: [],
    results: arr.results,
  };
  let allUrls: Promise<AxiosResponse<any, any>>[] = [];
  let updatedPokemonDetailsArr: {
    name: string;
    image: string;
    url: string;
  }[] = [];
  for (let pokemon of arr.results) {
    // pick id from returned results
    const pokemonId = pokemon.url.split("/").at(-2);
    let pokemonDetails = {
      name: pokemon.name,
      url: pokemon.url,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`,
    };
    updatedPokemonDetailsArr.push(pokemonDetails);
    allUrls.push(axios.get(pokemon["url"]));
  }
  updatedResult["allUrls"] = allUrls;
  updatedResult["results"] = updatedPokemonDetailsArr;
  return updatedResult;
};

type getAllPokemonsParams = { offset: number; limit?: number };
export const getAllPokemons = ({
  offset = 0,
  limit = 16,
}: getAllPokemonsParams) => async (
  dispatch: Dispatch<PokemonDispatchTypes>
): Promise<void> => {
  dispatch({ type: POKEMON_LOADING });
  try {
    const response = await Api.getPokemonsByPage({ limit, offset });
    const updatedResults = getExtraDetails(response.data);
    console.log(updatedResults.allUrls, "---------");

    dispatch({ type: POKEMON_SUCCESS, payload: updatedResults });
  } catch (err: any) {
    dispatch({
      type: POKEMON_FAIL,
      error: err.response,
    });
  }
};
