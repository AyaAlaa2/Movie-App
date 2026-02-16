import HeroHome from "./HeroHome";
import PopularMovies from "./popularSection/PopularMovies";
import NewMovies from "./NewArrivalSection/NewMovies"

const HomePage = () => {
  return (
    <>
      <HeroHome />
      <PopularMovies />
      <NewMovies />
    </>
  );
};

export default HomePage;
