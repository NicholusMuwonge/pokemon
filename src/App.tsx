import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import AllPokemonsContainer from "./components/allPokemons/AllPokemonsContainers";

const App = () => (
  <div className="App">
    <Router>
      <Switch>
        <Route path="/" element={<AllPokemonsContainer />} />
      </Switch>
    </Router>
  </div>
);

export default App;
