
   
import {combineReducers} from "redux";
import pokemonsReducer from "../components/allPokemons/allPokemonsReducer";

const rootReducer = combineReducers({
//   all the reducers will go here
    pokemons: pokemonsReducer
});

export default rootReducer
