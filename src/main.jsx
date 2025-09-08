import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ← Add this
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import "./assets/styles/globals.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* Set basename to your repo name for GitHub Pages */}
      <BrowserRouter basename="/Pokemon-Explorer">
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
