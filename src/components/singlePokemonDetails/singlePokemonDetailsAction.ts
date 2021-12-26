import { Dispatch } from "redux";
import Api from "../../axios/api";
import { imageBaseUrl, PokemonDispatchTypes, POKEMON_SUCCESS } from "../allPokemons/actionTypes";

export const getPokemonDetailsByName = (
    pokemonName: string,
    setNotFound: (state: boolean) => void
  ) => async (dispatch: Dispatch<PokemonDispatchTypes>): Promise<void> => {
    try {
      const response = await Api.getSinglePokemonDetailsByName(pokemonName);
      const responseCopy = {...response.data, image: imageBaseUrl+`${response.data.id}.png`}
      dispatch({
        type: POKEMON_SUCCESS,
        payload: [responseCopy],
        count: [responseCopy].length,
      });
    } catch (err: any) {
      if (
        (err.response && err.response.status === 404) ||
        err.response.status === 301
      ) {
        setNotFound(true);
      }
    }
  };
  