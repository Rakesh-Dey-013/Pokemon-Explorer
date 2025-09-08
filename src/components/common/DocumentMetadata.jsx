// src/components/common/DocumentMetadata.jsx
export const DocumentMetadata = ({ title, description }) => {
  return (
    <>
      <title>{title || "Pokémon Explorer"}</title>
      <meta name="description" content={description || "Explore the world of Pokémon"} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://pokemon-explorer.example.com/" />
      <meta property="og:title" content={title || "Pokémon Explorer"} />
      <meta property="og:description" content={description || "Explore the world of Pokémon"} />
      <meta property="og:image" content="/assets/images/pokemon-explorer-og.jpg" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://pokemon-explorer.example.com/" />
      <meta property="twitter:title" content={title || "Pokémon Explorer"} />
      <meta property="twitter:description" content={description || "Explore the world of Pokémon"} />
      <meta property="twitter:image" content="/assets/images/pokemon-explorer-og.jpg" />
    </>
  );
};