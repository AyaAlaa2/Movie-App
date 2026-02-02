import {getMovies} from "./api/moviesAPI.tsx"

const Home = async() => {
  const data = await getMovies();

  console.log(data)
  return (
    <div>
      <p>Hello World</p>
    </div>
  );
};

export default Home;
