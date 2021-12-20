import axiosConfig from "./axiosConfig";

interface getPokemonParamTypes {
  limit?: Number;
  offset?: Number;
}

const Api = {
  getPokemonsByPage(params: getPokemonParamTypes): Promise<Object[]> {
    const { limit = 16, offset = 0 } = params;
    return axiosConfig.get(`/pokemon?limit=${limit}&offset=${offset}`);
  },
  getSinglePokemonDetails(pokemonId: { pokemonId: Number }): Promise<Object[]> {
    return axiosConfig.get(`/pokemon/${pokemonId}/`);
  },
};

export default Api;
