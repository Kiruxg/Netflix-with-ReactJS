import React, { useEffect, useState } from "react";
import "./Banner.css";
import Axios from "./axios";
import requests from "./requests";
import TextTruncate from "react-text-truncate";
function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await Axios.get(requests.fetchNetflixOriginals);
      //get random movie from api
      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
      return response;
    }
    fetchData();
  }, []);
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <div className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </div>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <div className="banner__description">
          <TextTruncate
            line={3}
            element="p"
            truncateText="..."
            text={movie?.overview}
          />
        </div>
      </div>
      <div className="banner__contents--fadeBottom"></div>
    </div>
  );
}

export default Banner;
