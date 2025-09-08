export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getIdFromUrl = (url) => {
  const parts = url.split('/');
  return parts[parts.length - 2];
};

export const getPokemonImage = (id) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
};

export const getStatColor = (value) => {
  if (value > 100) return 'bg-green-500';
  if (value > 75) return 'bg-blue-500';
  if (value > 50) return 'bg-yellow-500';
  return 'bg-red-500';
};

export const formatPokemonName = (name) => {
  return name
    .split('-')
    .map((part) => capitalize(part))
    .join(' ');
};

export const getTypeEffectiveness = async (type) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
    return {
      doubleDamageFrom: response.data.damage_relations.double_damage_from.map(t => t.name),
      doubleDamageTo: response.data.damage_relations.double_damage_to.map(t => t.name),
      halfDamageFrom: response.data.damage_relations.half_damage_from.map(t => t.name),
      halfDamageTo: response.data.damage_relations.half_damage_to.map(t => t.name),
      noDamageFrom: response.data.damage_relations.no_damage_from.map(t => t.name),
      noDamageTo: response.data.damage_relations.no_damage_to.map(t => t.name),
    };
  } catch (error) {
    console.error('Error fetching type effectiveness:', error);
    return null;
  }
};