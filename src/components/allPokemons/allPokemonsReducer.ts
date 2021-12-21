import {
  POKEMON_FAIL,
  POKEMON_LOADING,
  POKEMON_SUCCESS,
  PokemonDispatchTypes,
  PokemonType,
} from "./actionTypes";

interface initialStateInterface {
  loading: boolean;
  results: PokemonType | any[];
  count?: number;
}

const defaultState: initialStateInterface = {
  loading: false,
  results: [],
  count: 0,
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
        results: action.payload.results,
        count: action.payload.count,
      };
    default:
      return state;
  }
};

export default pokemonsReducer;
