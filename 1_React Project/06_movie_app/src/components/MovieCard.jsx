import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movieData }) => {
  const navigate = useNavigate();
  //   console.log(movieData);
  const POSTER_URL = process.env.REACT_APP_POSTER_URL;

  return (
    <div
      className="movie max-w-sm rounded overflow-hidden shadow-lg mt-3 border relative cursor-pointer "
      onClick={() => navigate(`/detail/${movieData.id}`)}
    >
      <div className=" text-center bg-blue-700 ">
        <div className="font-bold text-xl">{movieData.title}</div>
      </div>
      <img
        className="w-full"
        src={POSTER_URL + movieData.poster_path}
        alt="Sunset in the mountains"
      />
      <div className="overview-over bg-blue-200/70 ">
        <p className=" text-base ">{movieData.overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
