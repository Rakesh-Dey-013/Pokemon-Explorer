import { motion } from 'framer-motion';
import {
  GiElectric,
  GiWaterDrop,
  GiFire,
  GiGrass,
  GiPoisonBottle,
  GiFeather,
  GiSpikedDragonHead,
  GiSpiderMask,
  GiStoneBlock,
  GiPsychicWaves,
  GiFist,
  GiIceCube,
  GiGhost,
  GiFairyWings,
  GiSteelClaws,
  GiGroundbreaker,
//   GiNormal,
} from 'react-icons/gi';
import { FaQuestion } from 'react-icons/fa';

const typeIcons = {
//   normal: <GiNormal className="text-gray-400" />,
  fire: <GiFire className="text-orange-500" />,
  water: <GiWaterDrop className="text-blue-400" />,
  electric: <GiElectric className="text-yellow-400" />,
  grass: <GiGrass className="text-green-500" />,
  ice: <GiIceCube className="text-cyan-300" />,
  fighting: <GiFist className="text-red-600" />,
  poison: <GiPoisonBottle className="text-purple-500" />,
  ground: <GiGroundbreaker className="text-amber-600" />,
  flying: <GiFeather className="text-indigo-300" />,
  psychic: <GiPsychicWaves className="text-pink-500" />,
  bug: <GiSpiderMask className="text-lime-500" />,
  rock: <GiStoneBlock className="text-amber-800" />,
  ghost: <GiGhost className="text-violet-500" />,
  dragon: <GiSpikedDragonHead className="text-indigo-600" />,
  dark: <GiGhost className="text-gray-800" />,
  steel: <GiSteelClaws className="text-gray-400" />,
  fairy: <GiFairyWings className="text-pink-300" />,
};

const typeColors = {
  normal: 'bg-gray-400',
  fire: 'bg-orange-500',
  water: 'bg-blue-400',
  electric: 'bg-yellow-400',
  grass: 'bg-green-500',
  ice: 'bg-cyan-300',
  fighting: 'bg-red-600',
  poison: 'bg-purple-500',
  ground: 'bg-amber-600',
  flying: 'bg-indigo-300',
  psychic: 'bg-pink-500',
  bug: 'bg-lime-500',
  rock: 'bg-amber-800',
  ghost: 'bg-violet-500',
  dragon: 'bg-indigo-600',
  dark: 'bg-gray-800',
  steel: 'bg-gray-400',
  fairy: 'bg-pink-300',
};

const typeTextColors = {
  normal: 'text-gray-400',
  fire: 'text-orange-500',
  water: 'text-blue-400',
  electric: 'text-yellow-400',
  grass: 'text-green-500',
  ice: 'text-cyan-300',
  fighting: 'text-red-600',
  poison: 'text-purple-500',
  ground: 'text-amber-600',
  flying: 'text-indigo-300',
  psychic: 'text-pink-500',
  bug: 'text-lime-500',
  rock: 'text-amber-800',
  ghost: 'text-violet-500',
  dragon: 'text-indigo-600',
  dark: 'text-gray-800',
  steel: 'text-gray-400',
  fairy: 'text-pink-300',
};

const TypeIcon = ({ type, size = 'md', showText = false, className = '' }) => {
  const IconComponent = typeIcons[type] || <FaQuestion className="text-gray-400" />;
  const colorClass = typeColors[type] || 'bg-gray-400';
  const textColorClass = typeTextColors[type] || 'text-gray-400';

  const sizeClasses = {
    sm: 'w-6 h-6 text-sm',
    md: 'w-8 h-8 text-base',
    lg: 'w-10 h-10 text-lg',
    xl: 'w-12 h-12 text-xl',
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={`flex items-center justify-center rounded-full ${colorClass}/20 border ${colorClass}/50 ${sizeClasses[size]} ${className}`}
      title={type ? `${type.charAt(0).toUpperCase() + type.slice(1)} type` : 'Unknown type'}
    >
      <div className={`${textColorClass} flex items-center justify-center`}>
        {IconComponent}
      </div>
      {showText && (
        <span className="ml-1 capitalize text-xs font-medium text-white">
          {type}
        </span>
      )}
    </motion.div>
  );
};

export default TypeIcon;