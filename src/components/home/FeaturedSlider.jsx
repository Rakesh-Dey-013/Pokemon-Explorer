import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PokemonCard from "../explorer/PokemonCard";
import { usePokemonList } from "../../hooks/usePokemonList";

const FeaturedSlider = () => {
  const { data: pokemonList } = usePokemonList(20);

  if (!pokemonList) return null;

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      className="py-4"
    >
      {pokemonList.map((pokemon) => (
        <SwiperSlide key={pokemon.name}>
          <PokemonCard pokemon={pokemon} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FeaturedSlider;