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
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/explorer",
        element: <Explorer />,
      },
      {
        path: "/pokemon/:id",
        element: <PokemonDetails />,
      },
      {
        path: "/all-pokemon",
        element: <AllPokemon />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);