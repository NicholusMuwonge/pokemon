export const POKEMON_LOADING = "POKEMON_LOADING";
export const POKEMON_FAIL = "POKEMON_FAIL";
export const POKEMON_SUCCESS = "POKEMON_SUCCESS";
export const imageBaseUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/`
export const LIMIT = 12;

export type resultsType = pokemonDetailsType[];

export type abilitiesType={
  ability: { name: string };
}[];

export type movesType={
  move: {name: string;}
}[];

export type statsType= {
  base_stat: number;
  stat: { name: string };
}[];

export type typesType= {
  type: {
    name: string;
  };
};

export type speciesType = {
  name: string;
};

export type pokemonDetailsType = {
  url?: string;
  abilities?:abilitiesType; 
  id?: number;
  name?: string;
  weight?: number;
  moves?: movesType;
  stats?: statsType;
  types?: typesType[];
  species?: speciesType;
  image?: string
};

export interface PokemonLoading {
  type: typeof POKEMON_LOADING;
}

export interface PokemonFail {
  type: typeof POKEMON_FAIL;
  error: any;
}

export interface PokemonSuccess {
  type: typeof POKEMON_SUCCESS;
  payload: resultsType;
  count: number
}

export type PokemonDispatchTypes =
  | PokemonLoading
  | PokemonFail
  | PokemonSuccess
