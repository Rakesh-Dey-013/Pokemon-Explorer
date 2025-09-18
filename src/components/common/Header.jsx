import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { TbPokeball } from "react-icons/tb";

const Header = () => {
  const navLinks = [
    { name: "Home", path: "/Pokemon-Explorer" },
    { name: "Explorer", path: "/Pokemon-Explorer/explorer" },
    { name: "All Pokémon", path: "/Pokemon-Explorer/all-pokemon" },
    { name: "About", path: "/Pokemon-Explorer/about" },
    { name: "Contact", path: "/Pokemon-Explorer/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-zinc-900/80 backdrop-blur-sm border-b border-zinc-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* ✅ Updated logo link to go to /Pokemon-Explorer */}
          <Link to="/Pokemon-Explorer" className="flex items-center gap-2">
            <TbPokeball className="text-red-500 text-2xl" />
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold text-white"
            >
              Pokémon Explorer
            </motion.span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                /* ✅ Only exact match activates Home link */
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
        </div>
      </div>
    </header>
  );
};

export default Header;
