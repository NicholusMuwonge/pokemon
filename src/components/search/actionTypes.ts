export const POKEMON_SEARCH_DATA_FETCH_SUCCESS =
  "POKEMON_SEARCH_DATA_FETCH_SUCCESS";

export type searchPokemonsType = pokemonObj[];
export interface PokemonSuccess {
  type: typeof POKEMON_SEARCH_DATA_FETCH_SUCCESS;
  payload: searchPokemonsType;
}

export type pokemonObj = {
  name: string;
  url: string;
};

export type SearchBarProps = {
  value: pokemonObj | string;
  onChange: (event: any, newValue: pokemonObj) => void;
  onInputChange: (event: any, newInputValue: string) => void;
  options: any[] | pokemonObj[];
  inputValue: string;
};
export type PokemonSearchDispatchTypes = PokemonSuccess;
