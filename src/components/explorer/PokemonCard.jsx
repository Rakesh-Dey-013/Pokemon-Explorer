import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TypeIcon from "../common/TypeIcon";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const PokemonCard = ({ pokemon, index = 0 }) => {
  const id = pokemon.url.split("/")[6];
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  
  // Get correct Pokemon types
  const types = pokemon.types ? pokemon.types.map((type) => type.type.name) : [];

  // Scroll animation variants
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 12,
        mass: 0.8
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative group perspective-1000"
      style={{ transformStyle: "preserve-3d" }}
    >
      <Link
        to={`/pokemon/${id}`}
        className="block relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900/80 via-slate-900/70 to-black/90 border border-zinc-800/40 backdrop-blur-xl shadow-2xl shadow-black/50 transition-all duration-500"
      >
        {/* Hover Gradient Background */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-zinc-900/70 via-emerald-500/10 to-zinc-900/70 opacity-0 transition-opacity duration-300"
          whileHover={{ opacity: 1 }}
        />

        {/* Animated border glow */}
        <motion.div 
          className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-400/20 via-blue-400/20 to-purple-400/20 opacity-0 blur-sm -z-10 transition-opacity duration-300"
          whileHover={{ opacity: 1 }}
        />

        {/* Glass reflection effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-3xl" />

        {/* Pokémon ID Badge - More Modern */}
        <motion.div 
          className="absolute -top-3 right-4 z-20"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-800 via-zinc-900 to-black border border-zinc-700/60 shadow-xl shadow-black/60 flex items-center justify-center backdrop-blur-sm">
              <span className="text-xs font-bold text-emerald-400 tracking-wider">#{id.padStart(3, '0')}</span>
            </div>
            {/* Badge glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-emerald-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </motion.div>

        {/* Image Container with Enhanced Effects */}
        <div className="relative pt-8 px-6">
          <motion.div 
            className="w-full h-48 flex items-center justify-center relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {/* Multiple layered glow effects for colorful appearance */}
            <motion.div 
              className="absolute inset-0 rounded-full bg-gradient-conic from-emerald-400/20 via-blue-400/20 via-purple-400/20 via-pink-400/20 to-emerald-400/20 opacity-60 blur-3xl"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            
            {/* Secondary colorful glow */}
            <motion.div 
              className="absolute inset-0 rounded-full bg-gradient-radial from-cyan-400/30 via-violet-400/20 to-transparent opacity-0 group-hover:opacity-80 blur-2xl"
              animate={{ 
                scale: [0.8, 1.3, 0.8],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Image with enhanced shadow */}
            <motion.div
              className="relative z-10"
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <LazyLoadImage
                src={imageUrl}
                alt={pokemon.name}
                effect="blur"
                className="w-full h-full object-contain drop-shadow-[0_8px_32px_rgba(0,0,0,0.8)] filter brightness-110 contrast-110 saturate-110"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Content Section with Glassmorphism */}
        <motion.div 
          className="relative p-6 pt-4 bg-gradient-to-t from-black/20 via-transparent to-transparent backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          {/* Pokémon Name with Modern Typography */}
          <motion.h3 
            className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-200 to-white capitalize text-center mb-6 tracking-wide drop-shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {pokemon.name}
          </motion.h3>
          
          {/* Type Icons with Enhanced Animation */}
          <motion.div 
            className="flex justify-center gap-4"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            {types.map((type, typeIndex) => (
              <motion.div
                key={type}
                whileHover={{ 
                  scale: 1.15, 
                  y: -2
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="relative"
              >
                <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <TypeIcon type={type} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced shine effect */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-200/15 to-transparent -translate-x-full opacity-0"
          whileHover={{
            translateX: "200%",
            opacity: [0, 1, 0],
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
          style={{ 
            transform: "skewX(-20deg)",
            transformOrigin: "center"
          }}
        />

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-emerald-400/60 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [-10, -30, -10],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </Link>
    </motion.div>
  );
};

export default PokemonCard;