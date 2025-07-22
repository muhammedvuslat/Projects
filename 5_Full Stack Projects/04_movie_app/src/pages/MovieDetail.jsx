import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/24/outline";
import { useLoginContext } from "../context/AuthContext";

const MovieDetail = () => {
  const { currentUser, setCurrentUser } = useLoginContext();

  const { id } = useParams();
  const TRAILER_URL = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=`;
  const DETAIL_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=`;
  const API_KEY = process.env.REACT_APP_API_KEY;
  const POSTER_URL = process.env.REACT_APP_POSTER_URL;

  const [trailerUrl, setTrailerUrl] = useState(null);
  const [detailUrl, setDetailUrl] = useState(null);
  const [firmaName, setFirmaName] = useState("");

  const fetchTrailer = async () => {
    const { data } = await axios(TRAILER_URL + API_KEY);
    console.log(data);
    setTrailerUrl(data.results[0]?.key);
  };
  const fetchDetail = async () => {
    const { data } = await axios(DETAIL_URL + API_KEY);
    console.log(data);
    setDetailUrl(data);
  };

  const firmaHost = () => {
    if (detailUrl?.homepage) {
      try {
        const firma = new URL(detailUrl.homepage).hostname.split(".")[1];
        const buyukFirma = firma.charAt(0).toUpperCase() + firma.slice(1);
        setFirmaName(buyukFirma);
      } catch (err) {
        console.error("Geçersiz URL:", err.message);
        setFirmaName("Bilinmiyor");
      }
    }
  };
  useEffect(() => {
    fetchTrailer();
    fetchDetail();

    return () => {};
  }, []);

  useEffect(() => {
    if (detailUrl) firmaHost();

    return () => {};
  }, [detailUrl]);

  // console.log(trailerUrl);
  // console.log(detailUrl);
  console.log(detailUrl?.homepage ? "Doğru" : "yanlış");
  console.log(currentUser);

  return (
    <div className="flex justify-center items-center p-20 border border-red-300 ">
      <div className="w-[600px] rounded overflow-hidden shadow-lg ">
        <iframe
          className="aspect-video w-[600px]"
          src={`https://www.youtube.com/embed/${trailerUrl}?autoplay=1&mute=1`}
          allow="autoplay"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <div className="px-6 py-4">
          <div className="max-w-sm w-full lg:max-w-full lg:flex">
            <div
              className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              style={{ backgroundImage: 'url("/img/card-left.jpg")' }}
              title="Woman holding a mug"
            >
              <img src={POSTER_URL + detailUrl?.poster_path} alt="" />
            </div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <div className="text-gray-900 font-bold text-xl mb-2">
                  {detailUrl?.title}
                </div>
                <p className="text-gray-700 text-base">{detailUrl?.overview}</p>

                <a
                  href={detailUrl?.homepage}
                  className="-m-1.5 p-1.5 flex flex-row-reverse mt-20 "
                  target="_blank"
                >
                  <p className="text-gray-700 text-base m-1">
                    Watch the {firmaName}
                  </p>
                  <HomeIcon className="h-6 w-6 text-gray-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
