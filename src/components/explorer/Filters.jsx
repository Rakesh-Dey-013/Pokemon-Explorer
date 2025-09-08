import { useState } from 'react';
import TypeIcon from '../common/TypeIcon';

const pokemonTypes = [
  'normal', 'fire', 'water', 'electric', 'grass', 'ice',
  'fighting', 'poison', 'ground', 'flying', 'psychic',
  'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy'
];

const Filters = ({ typeFilter, setTypeFilter, limit, setLimit }) => {
  const [showTypes, setShowTypes] = useState(false);

  return (
    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
      <div className="relative">
        <button
          onClick={() => setShowTypes(!showTypes)}
          className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors"
        >
          <span>Filter by Type</span>
          {typeFilter && (
            <TypeIcon type={typeFilter} size="sm" />
          )}
        </button>

        {showTypes && (
          <div className="absolute z-10 mt-2 w-64 bg-zinc-800 border border-zinc-700 rounded-lg shadow-lg p-2 grid grid-cols-3 gap-2">
            <button
              onClick={() => {
                setTypeFilter(null);
                setShowTypes(false);
              }}
              className="col-span-3 p-2 text-sm text-center hover:bg-zinc-700 rounded transition-colors"
            >
              Clear Filter
            </button>
            {pokemonTypes.map((type) => (
              <button
                key={type}
                onClick={() => {
                  setTypeFilter(type);
                  setShowTypes(false);
                }}
                className="flex flex-col items-center p-2 hover:bg-zinc-700 rounded transition-colors"
              >
                <TypeIcon type={type} size="sm" />
                <span className="text-xs mt-1 capitalize">{type}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center gap-2">
        <label htmlFor="limit" className="text-sm text-gray-400">
          Show:
        </label>
        <select
          id="limit"
          value={limit}
          onChange={(e) => setLimit(Number(e.target.value))}
          className="bg-zinc-800 border border-zinc-700 rounded px-2 py-1 text-sm"
        >
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
          <option value={151}>151</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;