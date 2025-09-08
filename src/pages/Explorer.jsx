import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { fetchPokemonList } from '../utils/api';
import Search from '../components/explorer/Search';
import Filters from '../components/explorer/Filters';
import PokemonList from '../components/explorer/PokemonList';
import Loading from '../components/common/Loading';
import Error from '../components/common/Error';
import { POKEMON_LIMIT_OPTIONS } from '../utils/constants';

const Explorer = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState(null);
  const [limit, setLimit] = useState(POKEMON_LIMIT_OPTIONS[0]);

  const {
    data: pokemonList,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['pokemonList', limit, typeFilter],
    queryFn: () => fetchPokemonList(limit),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  const filteredPokemon = pokemonList
    ? pokemonList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h1 className="text-3xl font-bold text-white mb-6">Pokémon Explorer</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Search 
              searchTerm={searchTerm} 
              setSearchTerm={setSearchTerm} 
            />
          </div>
          
          <div className="lg:col-span-1">
            <Filters
              typeFilter={typeFilter}
              setTypeFilter={setTypeFilter}
              limit={limit}
              setLimit={setLimit}
            />
          </div>
        </div>
      </motion.div>

      {isLoading ? (
        <Loading />
      ) : isError ? (
        <Error message={error.message} />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {filteredPokemon.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-400 mb-2">
                No Pokémon found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filters
              </p>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-400">
                  Showing {filteredPokemon.length} of {pokemonList.length} Pokémon
                </p>
                {typeFilter && (
                  <button
                    onClick={() => setTypeFilter(null)}
                    className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-sm text-gray-300 transition-colors"
                  >
                    Clear Type Filter
                  </button>
                )}
              </div>

              <PokemonList 
                pokemonList={filteredPokemon} 
                typeFilter={typeFilter} 
              />
            </>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default Explorer;