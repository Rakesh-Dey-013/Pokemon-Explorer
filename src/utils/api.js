import axios from "axios";

const API_BASE_URL = "https://pokeapi.co/api/v2";

export const fetchPokemonList = async (limit = 151, offset = 0) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/pokemon?limit=${limit}&offset=${offset}`
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching Pokémon list:", error);
    throw error;
  }
};

export const fetchPokemonDetails = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pokemon/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Pokémon details:", error);
    throw error;
  }
};

export const fetchPokemonSpecies = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pokemon-species/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Pokémon species:", error);
    throw error;
  }
};

export const fetchEvolutionChain = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching evolution chain:", error);
    throw error;
  }
};

export const fetchPokemonByType = async (type) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/type/${type}`);
    return response.data.pokemon.map((entry) => entry.pokemon);
  } catch (error) {
    console.error("Error fetching Pokémon by type:", error);
    throw error;
  }
};