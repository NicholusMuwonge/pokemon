import { AxiosResponse } from "axios";

export const POKEMON_LOADING = "POKEMON_LOADING";
export const POKEMON_FAIL = "POKEMON_FAIL";
export const POKEMON_SUCCESS = "POKEMON_SUCCESS";

export type PokemonType ={
  results: resultsType
};

export type resultsType = {
  count: number,
  results: {
    name: string,
    url: string,
    image?: string
  }[],
  allUrls?: Promise<AxiosResponse<any, any>>[] | any[]
}

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
}

export type PokemonDispatchTypes =
  | PokemonLoading
  | PokemonFail
  | PokemonSuccess;
