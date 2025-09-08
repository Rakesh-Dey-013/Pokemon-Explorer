// src/pages/PokemonDetails.jsx
import { useParams } from "react-router-dom";
import { usePokemon } from "../hooks/usePokemon";
import Loading from "../components/common/Loading";
import Error from "../components/common/Error";
import PokemonDetails from "../components/details/PokemonDetails";
import { DocumentMetadata } from "../components/common/DocumentMetadata";

const PokemonDetailsPage = () => {
  const { id } = useParams();
  const { pokemon, species, isLoading, isError, error } = usePokemon(id);

  if (isLoading) return <Loading />;
  if (isError) return <Error message={error.message} />;

  return (
    <>
      <DocumentMetadata 
        title={`${pokemon.name} | Pokémon Explorer`}
        description={`Detailed information about ${pokemon.name} including stats, abilities, evolutions and more`}
      />
      
      <div className="container mx-auto px-4 py-8">
        <PokemonDetails pokemon={pokemon} species={species} />
      </div>
    </>
  );
};

export default PokemonDetailsPage;