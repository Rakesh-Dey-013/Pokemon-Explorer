import { useQuery } from '@tanstack/react-query';
import { fetchPokemonList } from '../../utils/api';
import PokemonCard from '../explorer/PokemonCard';
import Loading from '../common/Loading';
import Error from '../common/Error';

const Recommended = () => {
  const { data: pokemonList, isLoading, isError, error } = useQuery({
    queryKey: ['recommendedPokemon'],
    queryFn: () => fetchPokemonList(6, Math.floor(Math.random() * 100)),
  });

  if (isLoading) return <Loading />;
  if (isError) return <Error message={error.message} />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default Recommended;