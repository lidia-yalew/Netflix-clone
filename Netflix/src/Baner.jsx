import React, { useEffect, useState } from "react";
import "./Baner.css";
import axios from "./axios";
import requests from "./requist";

function Baner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(requests.fetchNetflixOriginals);
        const randomIndex = Math.floor(
          Math.random() * response.data.results.length
        );
        setMovie(response.data.results[randomIndex]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundImage: movie
          ? `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`
          : "",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>
        <p className="banner-description">{truncate(movie?.overview, 150)}</p>
      </div>
      <div className="last-div"></div>
    </header>
  );
}

export default Baner;
