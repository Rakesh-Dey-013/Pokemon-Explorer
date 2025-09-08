import { useQuery } from "@tanstack/react-query";
import { fetchPokemonDetails, fetchPokemonSpecies } from "../utils/api";

export const usePokemon = (id) => {
  const pokemonQuery = useQuery({
    queryKey: ["pokemon", id],
    queryFn: () => fetchPokemonDetails(id),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  const speciesQuery = useQuery({
    queryKey: ["pokemonSpecies", id],
    queryFn: () => fetchPokemonSpecies(id),
    staleTime: 1000 * 60 * 5, // 5 minutes
    enabled: !!pokemonQuery.data,
  });

  return {
    pokemon: pokemonQuery.data,
    species: speciesQuery.data,
    isLoading: pokemonQuery.isLoading || speciesQuery.isLoading,
    isError: pokemonQuery.isError || speciesQuery.isError,
    error: pokemonQuery.error || speciesQuery.error,
  };
};