import { combineReducers } from "redux";
import pokemonsReducer from "../components/allPokemons/allPokemonsReducer";
import pokemonsSearchDataReducer from "../components/search/searchReducer";

const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
  pokemonSearchOptions: pokemonsSearchDataReducer,
});

export default rootReducer;
