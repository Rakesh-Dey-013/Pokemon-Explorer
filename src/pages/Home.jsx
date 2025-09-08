// src/pages/Home.jsx
import { DocumentMetadata } from "../components/common/DocumentMetadata";
import { motion } from "framer-motion";
import Hero from "../components/home/Hero";
import FeaturedSlider from "../components/home/FeaturedSlider";
import Recommended from "../components/home/Recommended";

const Home = () => {
  return (
    <>
      <DocumentMetadata 
        title="Pokémon Explorer | Discover Your Favorite Pokémon"
        description="Explore detailed information about all your favorite Pokémon including stats, evolutions, and more!"
      />
      
      <div className="flex flex-col">
        <Hero />
        
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="py-12 bg-gradient-to-b from-zinc-900 to-zinc-900/80"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-white mb-8">Featured Pokémon</h2>
            <FeaturedSlider />
          </div>
        </motion.section>

        <section className="py-12 bg-zinc-900">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-white mb-8">Recommended</h2>
            <Recommended />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;