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
  count: number
}

const defaultState: initialStateInterface = {
  loading: false,
  results: [],
  count: 0
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
        count: 0
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
        count: action.count??state.count
      };
    default:
      return state;
  }
};

export default pokemonsReducer;
