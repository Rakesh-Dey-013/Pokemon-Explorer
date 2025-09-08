import { useQuery } from "@tanstack/react-query";
import { fetchPokemonList } from "../utils/api";

export const usePokemonList = (limit = 151, offset = 0) => {
  return useQuery({
    queryKey: ["pokemonList", limit, offset],
    queryFn: () => fetchPokemonList(limit, offset),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};