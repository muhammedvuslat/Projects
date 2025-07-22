import { useEffect } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import Header from "../components/Header";
import { useLoginContext } from "../context/AuthContext";

const Home = () => {
  const { movieData, setMovieData } = useLoginContext();

  const URL = process.env.REACT_APP_BASE_URL_LIST;
  const API_KEY = process.env.REACT_APP_API_KEY;
  const getApı = URL + API_KEY;

  useEffect(() => {
    getMovieList(getApı);

    return () => {};
  }, []);

  const getMovieList = async (API) => {
    try {
      const { data } = await axios(API);
      setMovieData(data.results);
    } catch (error) {
      console.log("error Şudur kardeşim", error);
    }
  };

  return (
    <>
      <div>
        <Header />
      </div>

      <div className="flex flex-wrap  gap-5 place-content-around p-3 ">
        {movieData?.map((item, index) => {
          // console.log(item.poster_path);
          return <MovieCard key={index} movieData={item} />;
        })}
      </div>
    </>
  );
};

export default Home;
