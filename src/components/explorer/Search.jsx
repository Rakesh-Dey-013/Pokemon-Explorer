import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPokemonList } from "../../utils/api";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  const { data: pokemonList } = useQuery({
    queryKey: ["pokemonList"],
    queryFn: () => fetchPokemonList(1000),
    staleTime: Infinity,
  });

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredPokemon([]);
      return;
    }

    if (pokemonList) {
      const filtered = pokemonList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPokemon(filtered.slice(0, 5));
    }
  }, [searchTerm, pokemonList]);

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative">
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search Pokémon..."
          className="w-full pl-10 pr-10 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm("")}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
          >
            <FiX />
          </button>
        )}
      </div>

      <AnimatePresence>
        {isFocused && filteredPokemon.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-10 mt-2 w-full bg-zinc-800 border border-zinc-700 rounded-lg shadow-lg overflow-hidden"
          >
            <ul>
              {filteredPokemon.map((pokemon) => {
                const id = pokemon.url.split("/")[6];
                return (
                  <motion.li
                    key={pokemon.name}
                    whileHover={{ backgroundColor: "rgba(63, 63, 70, 0.5)" }}
                  >
                    <Link
                      to={`/pokemon/${id}`}
                      className="block px-4 py-2 text-white capitalize hover:bg-zinc-700/50 transition-colors"
                    >
                      {pokemon.name}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Search;