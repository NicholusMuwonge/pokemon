import React from "react";
import Header from "./Header";
import PokemonDetailsCard from "./PokemonDetailsCard";
import { LIMIT, resultsType } from "../actionTypes";
import { allPokemonsStyles } from "./styles";
import SearchBar from "../../search/SearchContainer";
import { useSelector } from "react-redux";
import { RootStore } from "../../../redux/store";
import { useParams } from "react-router-dom";

const AllPokemonsComponent: React.FC<{ allPokemons: resultsType }> = ({
  allPokemons,
}) => {
  const loading = useSelector(
    (centralState: RootStore) => centralState.pokemons.loading
  );
  const pokemons = useSelector(
    (centralState: RootStore) => centralState.pokemons
  );
  const { page } = useParams<{ page: string | any }>();
  return (
    <div>
      <Header />
      <SearchBar />
      <div style={allPokemonsStyles.page}> <b>Showing</b>: Page {page??1} of {Math.ceil(pokemons.count/LIMIT)}</div>
      <section className="cards" style={allPokemonsStyles.cardsContainer}>
        <div style={allPokemonsStyles.cardsSubContainer}>
          {allPokemons.length
            ? allPokemons.map((pokemon) => (
                <PokemonDetailsCard
                  name={pokemon?.name}
                  image={pokemon?.image}
                  abilities={pokemon?.abilities?.slice(0,2)}
                  key={`${pokemon?.name}`}
                />
              ))
            : null} 
        </div>
        <div>
        {
          loading && !pokemons.results.length?
          <h1 style={allPokemonsStyles.loading}>Loading Pokemons....</h1>:
          null
        }
        {
          !loading && !pokemons.results.length?
          <p style={allPokemonsStyles.error}>There was an error. Please refresh to retry....</p>:
          null
        }
        </div>
      </section>
    </div>
  );
};

export default AllPokemonsComponent;
