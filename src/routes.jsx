// routes.jsx
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Explorer from "./pages/Explorer";
import PokemonDetails from "./pages/PokemonDetails";
import AllPokemon from "./pages/AllPokemon";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./components/common/Layout";

export const routes = createBrowserRouter([
  {
    path: "/Pokemon-Explorer",
    element: <Layout />,
    children: [
      {
        path: "/Pokemon-Explorer",
        element: <Home />,
      },
      {
        path: "/Pokemon-Explorer/explorer",
        element: <Explorer />,
      },
      {
        path: "/Pokemon-Explorer/pokemon/:id",
        element: <PokemonDetails />,
      },
      {
        path: "/Pokemon-Explorer/all-pokemon",
        element: <AllPokemon />,
      },
      {
        path: "/Pokemon-Explorer/about",
        element: <About />,
      },
      {
        path: "/Pokemon-Explorer/contact",
        element: <Contact />,
      },
    ],
  },
]);