import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Search from '../explorer/Search';
import BallImage from '../../assets/images/Ball.png';
import BallImage2 from '../../assets/images/Ball2.png';

const Hero = () => {
  return (
    <section className="relative h-[500px] md:h-[600px] flex items-center justify-center bg-gradient-to-b from-zinc-900 to-zinc-800 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/src/assets/images/pokeball-pattern.svg')] opacity-5" />

              {/* spot light */}
      <div className="absolute top-0 left-2/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/70 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute top-70 left-0/2 transform -translate-x-1/2 -translate-y-1/2 w-70 h-70 bg-emerald-600/70 rounded-full filter blur-3xl opacity-20"></div>
        
        {/* Floating Pokéballs */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-50 h-50 opacity-50"
        >
          <LazyLoadImage 
            src={BallImage}
            alt="Pokéball" 
            effect="opacity"
          />
        </motion.div>
        
        <motion.div
          animate={{ y: [-20, 0, -20] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 right-1/4 w-20 h-20 opacity-50"
        >
          <LazyLoadImage 
            src={BallImage2}
            alt="Great Ball" 
            effect="opacity"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Explore the <span className="text-red-500">Pokémon</span> Universe
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Discover detailed information about your favorite Pokémon, their stats, evolutions, and more!
          </p>
          
          <div className="max-w-md mx-auto">
            <Search />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;