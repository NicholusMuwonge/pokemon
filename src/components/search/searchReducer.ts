import {
  POKEMON_SEARCH_DATA_FETCH_SUCCESS,
  PokemonSearchDispatchTypes,
  searchPokemonsType,
} from "./actionTypes";

interface initialStateInterface {
  results: searchPokemonsType | any[];
}

const defaultState: initialStateInterface = {
  results: [],
};

const pokemonsSearchDataReducer = (
  state: initialStateInterface = defaultState,
  action: PokemonSearchDispatchTypes
): initialStateInterface => {
  switch (action.type) {
    case POKEMON_SEARCH_DATA_FETCH_SUCCESS:
      return {
        results: action.payload,
      };
    default:
      return state;
  }
};

export default pokemonsSearchDataReducer;
