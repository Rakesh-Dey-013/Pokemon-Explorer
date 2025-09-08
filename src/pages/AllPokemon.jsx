import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPokemonList } from "../utils/api";
import PokemonCard from "../components/explorer/PokemonCard";
import Loading from "../components/common/Loading";
import Error from "../components/common/Error";
import Filters from "../components/explorer/Filters";

const AllPokemon = () => {
  const [limit, setLimit] = useState(151);
  const [offset, setOffset] = useState(0);
  const [typeFilter, setTypeFilter] = useState(null);

  const {
    data: pokemonList,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["pokemonList", limit, offset],
    queryFn: () => fetchPokemonList(limit, offset),
  });

  if (isLoading) return <Loading />;
  if (isError) return <Error message={error.message} />;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-4">All Pokémon</h1>
        <Filters
          typeFilter={typeFilter}
          setTypeFilter={setTypeFilter}
          limit={limit}
          setLimit={setLimit}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {pokemonList.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button
          onClick={() => setLimit(limit + 20)}
          className="px-6 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default AllPokemon;