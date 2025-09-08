import { useQuery } from '@tanstack/react-query';
import { fetchPokemonList, fetchPokemonByType } from '../../utils/api';
import PokemonCard from './PokemonCard';
import Loading from '../common/Loading';
import Error from '../common/Error';

const PokemonList = ({ typeFilter, limit }) => {
  const queryKey = typeFilter ? ['pokemonByType', typeFilter] : ['pokemonList', limit];
  const queryFn = typeFilter ? () => fetchPokemonByType(typeFilter) : () => fetchPokemonList(limit);

  const { data: pokemonList, isLoading, isError, error } = useQuery({
    queryKey,
    queryFn,
  });

  if (isLoading) return <Loading />;
  if (isError) return <Error message={error.message} />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.name || pokemon.url} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;