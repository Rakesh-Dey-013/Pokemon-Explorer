import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto bg-zinc-800/50 rounded-xl border border-zinc-700/50 p-8"
      >
        <h1 className="text-3xl font-bold text-white mb-6">About Pokémon Explorer</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 mb-4">
            Pokémon Explorer is a comprehensive web application built for Pokémon enthusiasts 
            to discover and learn about their favorite Pokémon. This project was created 
            using modern web technologies including React, Tailwind CSS, and the PokéAPI.
          </p>
          
          <h2 className="text-xl font-semibold text-white mt-6 mb-3">Features</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Browse through hundreds of Pokémon with detailed information</li>
            <li>View stats, abilities, evolutions, and sprites</li>
            <li>Search and filter Pokémon by name, type, and more</li>
            <li>Responsive design that works on all devices</li>
            <li>Dark theme UI with smooth animations</li>
          </ul>
          
          <h2 className="text-xl font-semibold text-white mt-6 mb-3">Technology Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {[
              { name: 'React', color: 'text-blue-400' },
              { name: 'Tailwind CSS', color: 'text-cyan-400' },
              { name: 'Framer Motion', color: 'text-purple-400' },
              { name: 'PokéAPI', color: 'text-red-400' },
              { name: 'React Query', color: 'text-pink-400' },
              { name: 'Swiper.js', color: 'text-yellow-400' },
            ].map((tech) => (
              <div
                key={tech.name}
                className={`${tech.color} bg-zinc-800/50 rounded-lg p-3 border border-zinc-700/50 text-center`}
              >
                {tech.name}
              </div>
            ))}
          </div>
          
          <h2 className="text-xl font-semibold text-white mt-6 mb-3">Disclaimer</h2>
          <p className="text-gray-300">
            Pokémon Explorer is not affiliated with, sponsored by, or endorsed by 
            Nintendo, Game Freak, or The Pokémon Company. All Pokémon content is © 
            Nintendo, Game Freak, and The Pokémon Company.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;