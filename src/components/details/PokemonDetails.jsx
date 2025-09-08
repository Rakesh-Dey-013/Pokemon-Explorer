import { motion } from "framer-motion";
import TypeIcon from "../common/TypeIcon";
import StatsChart from "./StatsChart";
import EvolutionChain from "./EvolutionChain";

const PokemonDetails = ({ pokemon, species }) => {
  const types = pokemon.types.map((type) => type.type.name);
  const stats = pokemon.stats.map((stat) => ({
    name: stat.stat.name,
    value: stat.base_stat,
  }));

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-zinc-800/50 rounded-xl border border-zinc-700/50 p-6"
      >
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-700/50">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                alt={pokemon.name}
                className="w-full h-auto"
              />
            </div>

            <div className="mt-4">
              <h2 className="text-2xl font-bold text-white capitalize mb-2">
                {pokemon.name}
              </h2>
              <div className="flex gap-2 mb-4">
                {types.map((type) => (
                  <TypeIcon key={type} type={type} />
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-900/50 rounded-lg p-3 border border-zinc-700/50">
                  <p className="text-sm text-gray-400">Height</p>
                  <p className="text-white font-medium">
                    {(pokemon.height / 10).toFixed(1)} m
                  </p>
                </div>
                <div className="bg-zinc-900/50 rounded-lg p-3 border border-zinc-700/50">
                  <p className="text-sm text-gray-400">Weight</p>
                  <p className="text-white font-medium">
                    {(pokemon.weight / 10).toFixed(1)} kg
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-2/3">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-4">Stats</h3>
              <StatsChart stats={stats} />
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-4">Abilities</h3>
              <div className="flex flex-wrap gap-2">
                {pokemon.abilities.map((ability) => (
                  <span
                    key={ability.ability.name}
                    className="px-3 py-1 bg-zinc-900/50 rounded-full text-sm text-white border border-zinc-700/50 capitalize"
                  >
                    {ability.ability.name.replace("-", " ")}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-4">Evolutions</h3>
              <EvolutionChain species={species} />
            </div>


          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PokemonDetails;