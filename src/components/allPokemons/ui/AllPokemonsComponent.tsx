import React from "react";
import Header from "./Header";
import PokemonDetailsCard from "./PokemonDetailsCard";
import { resultsType } from "../actionTypes";
import { allPokemonsStyles } from "./styles";
import SearchBar from "../../search/SearchContainer";

const AllPokemonsComponent: React.FC<{ allPokemons: resultsType }> = ({
  allPokemons,
}) => {
  return (
    <div>
      <Header />
      <SearchBar />
      <section className="cards" style={allPokemonsStyles.cardsContainer}>
        <div style={allPokemonsStyles.cardsSubContainer}>
          {allPokemons.length
            ? allPokemons.map((pokemon) => (
                <PokemonDetailsCard
                  name={pokemon?.name}
                  image={pokemon?.image}
                  types={pokemon?.types}
                  key={`${pokemon?.name}`}
                />
              ))
            : null}
        </div>
      </section>
    </div>
  );
};

export default AllPokemonsComponent;
