import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { TbPokeball } from "react-icons/tb";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/Pokemon-Explorer" },
    { name: "Explorer", path: "/Pokemon-Explorer/explorer" },
    { name: "All Pokémon", path: "/Pokemon-Explorer/all-pokemon" },
    { name: "About", path: "/Pokemon-Explorer/about" },
    { name: "Contact", path: "/Pokemon-Explorer/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-zinc-900/80 backdrop-blur-sm border-b border-zinc-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/Pokemon-Explorer" 
            className="flex items-center gap-2"
            onClick={closeMenu}
          >
            <TbPokeball className="text-red-500 text-2xl" />
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold text-white"
            >
              Pokémon Explorer
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.name === "Home"}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "text-white bg-zinc-800"
                      : "text-gray-400 hover:text-white hover:bg-zinc-800/50"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-zinc-800/50 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <HiX className="text-2xl" />
            ) : (
              <HiMenu className="text-2xl" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <div className="py-2 space-y-1 bg-zinc-800/50 rounded-lg backdrop-blur-sm">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <NavLink
                      to={link.path}
                      end={link.name === "Home"}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `block px-4 py-3 text-sm font-medium transition-colors ${
                          isActive
                            ? "text-white bg-zinc-700"
                            : "text-gray-400 hover:text-white hover:bg-zinc-700/50"
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden"
            style={{ zIndex: -1 }}
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;