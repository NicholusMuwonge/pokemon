import axiosConfig from "./axiosConfig";

interface getPokemonParamTypes {
  limit?: Number;
  offset?: Number;
}

const Api = {
  getPokemonsByPage(params: getPokemonParamTypes) {
    const { limit, offset } = params;
    return axiosConfig.get(`/pokemon?limit=${limit}&offset=${offset}`);
  },
  getSinglePokemonDetails(pokemonId: { pokemonId: Number }) {
    return axiosConfig.get(`/pokemon/${pokemonId}/`);
  },
  getSinglePokemonDetailsByName(pokemonName:string) {
    return axiosConfig.get(`/pokemon/${pokemonName}/`);
  },
};

export default Api;
