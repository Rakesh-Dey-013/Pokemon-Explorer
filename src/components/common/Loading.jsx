import { motion } from 'framer-motion';
import { GiPokecog } from 'react-icons/gi';

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="text-6xl text-red-500 mb-4"
      >
        <GiPokecog />
      </motion.div>
      <motion.p
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
        className="text-xl text-gray-400"
      >
        Loading Pokémon...
      </motion.p>
    </div>
  );
};

export default Loading;