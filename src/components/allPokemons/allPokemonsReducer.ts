import {
  POKEMON_FAIL,
  POKEMON_LOADING,
  POKEMON_SUCCESS,
  PokemonDispatchTypes,
  resultsType,
} from "./actionTypes";

interface initialStateInterface {
  loading: boolean;
  results: resultsType|any[];
}

const defaultState: initialStateInterface = {
  loading: false,
  results: [],
};

const pokemonsReducer = (
  state: initialStateInterface = defaultState,
  action: PokemonDispatchTypes
): initialStateInterface => {
  switch (action.type) {
    case POKEMON_FAIL:
      return {
        ...state,
        loading: false,
        results: [],
      };
    case POKEMON_LOADING:
      return {
        ...state,
        loading: true,
      };
    case POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        results: action.payload,
      };
    default:
      return state;
  }
};

export default pokemonsReducer;
