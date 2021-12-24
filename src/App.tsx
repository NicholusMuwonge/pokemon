import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import AllPokemonsContainer from "./components/allPokemons/AllPokemonsContainers";
import './App.css';
import SinglePokemonDetailsContainer from "./components/singlePokemonDetails/SinglePokemonDetailsContainer";

const App = () => (
  <div className="App">
    <Router>
      <Switch>
        <Route path="/" element={<AllPokemonsContainer />} />
        <Route path="/pokemons/page/:page" element={<AllPokemonsContainer />} />
        <Route path="/pokemon/:pokemonName" element={<SinglePokemonDetailsContainer />} />
      </Switch>
    </Router>
  </div>
);

export default App;
