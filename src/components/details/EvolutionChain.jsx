import { useQuery } from '@tanstack/react-query';
import { fetchEvolutionChain } from '../../utils/api';
import { Link } from 'react-router-dom';
import Loading from '../common/Loading';
import Error from '../common/Error';
import TypeIcon from '../common/TypeIcon';

const EvolutionChain = ({ species }) => {
  const { data: evolutionChain, isLoading, isError, error } = useQuery({
    queryKey: ['evolutionChain', species.evolution_chain.url],
    queryFn: () => fetchEvolutionChain(species.evolution_chain.url),
    enabled: !!species.evolution_chain?.url,
  });

  if (isLoading) return <Loading />;
  if (isError) return <Error message={error.message} />;
  if (!evolutionChain) return null;

  const renderEvolution = (chain) => {
    if (!chain) return null;

    const pokemonId = chain.species.url.split('/')[6];
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;

    return (
      <div key={chain.species.name} className="flex flex-col items-center">
        <Link
          to={`/pokemon/${pokemonId}`}
          className="group relative flex flex-col items-center"
        >
          <div className="w-24 h-24 bg-zinc-800 rounded-full p-2 mb-2 group-hover:bg-zinc-700 transition-colors">
            <img
              src={imageUrl}
              alt={chain.species.name}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-sm font-medium text-white capitalize">
            {chain.species.name}
          </span>
          <span className="text-xs text-gray-400">#{pokemonId}</span>
        </Link>

        {chain.evolves_to.length > 0 && (
          <div className="mt-4 flex flex-col items-center">
            <div className="text-xs text-gray-500 mb-2">
              {chain.evolves_to[0].evolution_details[0]?.trigger?.name === 'level-up' &&
                `Lvl ${chain.evolves_to[0].evolution_details[0]?.min_level || '?'}`}
            </div>
            <div className="h-8 w-px bg-zinc-700" />
            <div className="flex space-x-6 mt-4">
              {chain.evolves_to.map((evolution) => renderEvolution(evolution))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-zinc-800/50 rounded-lg p-4 border border-zinc-700/50">
      <h4 className="text-lg font-semibold text-white mb-4">Evolution Chain</h4>
      {evolutionChain.chain.evolves_to.length === 0 ? (
        <p className="text-gray-400">This Pokémon does not evolve.</p>
      ) : (
        <div className="flex justify-center">
          {renderEvolution(evolutionChain.chain)}
        </div>
      )}
    </div>
  );
};

export default EvolutionChain;