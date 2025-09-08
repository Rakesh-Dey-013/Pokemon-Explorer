import { FaGithub, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-500">
              Pokémon Explorer © {new Date().getFullYear()}
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Data provided by{" "}
              <a
                href="https://pokeapi.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                PokéAPI
              </a>
            </p>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://github.com/Rakesh-Dey-013"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="https://x.com/RD_Gaming796974"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/rakeshdey007/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Linkedin"
            >
              <FaLinkedinIn className="text-xl" />
            </a>
            <a
              href="https://www.instagram.com/rakesh._._007/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;