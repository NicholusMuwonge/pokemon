import { Dispatch } from "redux";
import {
  POKEMON_FAIL,
  POKEMON_LOADING,
  POKEMON_SUCCESS,
  PokemonDispatchTypes,
  resultsType,
  pokemonDetailsType,
  imageBaseUrl,
  LIMIT,
} from "./actionTypes";
import Api from "../../axios/api";
import axios from "axios";
type updatedResType = {
  allUrls: string[];
  results:
    | {
        name: string;
        image: string;
      }[]
    | any[];
};


const getExtraDetails = (arr: updatedResType): updatedResType => {
  let updatedResult: updatedResType = {
    allUrls: [],
    results: [],
  };
  let allUrls: any[] = [];
  let updatedPokemonDetailsArr: {
    name: string;
    image: string;
  }[] = [];
  for (let pokemon of arr.results) {
    const pokemonId = pokemon?.url?.split("/").at(-2);
    let pokemonDetails = {
      name: pokemon.name,
      image: imageBaseUrl+`${pokemonId}.png`,
    };
    updatedPokemonDetailsArr.push(pokemonDetails);
    allUrls.push(pokemon?.url);
  }
  updatedResult["allUrls"] = allUrls;
  updatedResult["results"] = updatedPokemonDetailsArr;
  return updatedResult;
};

type getAllPokemonsParams = { offset: number; limit?: number };
export const getAllPokemons = ({
  offset = 0,
  limit = LIMIT,
}: getAllPokemonsParams) => async (
  dispatch: Dispatch<PokemonDispatchTypes>
): Promise<void> => {
  dispatch({ type: POKEMON_LOADING });
  try {
    const response = await Api.getPokemonsByPage({ limit, offset });
    const updatedResults = getExtraDetails(response.data);
    dispatch({ type: POKEMON_SUCCESS, payload: updatedResults.results, count: response.data.count});
    if (updatedResults) {
      const allUrls = updatedResults?.allUrls!;
      const res = await getAllPokemonDetails(allUrls);
      dispatch({ type: POKEMON_SUCCESS, payload: res, count: response.data.count });
    }
  } catch (err: any) {
    dispatch({
      type: POKEMON_FAIL,
      error: err.response,
    });
  }
};

export const getAllPokemonDetails = async (
  allUrls: string[]
): Promise<resultsType> => {
  const pokemonWithDetails: any[] = [];
  try {
    const allUrlsChangedToAxiosInstances: any[] = [];
    allUrls.forEach((url) =>
      allUrlsChangedToAxiosInstances.push(axios.get(url))
    );
    const pokemonDetails = await Promise.all(allUrlsChangedToAxiosInstances);
    for (let pokemon of pokemonDetails) {
      const updatedDataObject: pokemonDetailsType = {};
      updatedDataObject["abilities"] = pokemon.data.abilities;
      updatedDataObject["id"] = pokemon.data.id;
      updatedDataObject["name"] = pokemon.data.name;
      updatedDataObject["weight"] = pokemon.data.weight;
      updatedDataObject["moves"] = pokemon.data.moves;
      updatedDataObject["stats"] = pokemon.data.stats;
      updatedDataObject["types"] = pokemon.data.types;
      updatedDataObject["species"] = pokemon.data.species;
      updatedDataObject["image"] = imageBaseUrl+`${pokemon.data.id}.png`;
      pokemonWithDetails.push(updatedDataObject);
    }
  } catch (err: any) {
    return err
  }
  return pokemonWithDetails;
};
