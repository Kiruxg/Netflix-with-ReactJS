import React from "react";
import "./App.css";
import requests from "./requests";
import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Mystery" fetchUrl={requests.fetchMystery} />
      <Row title="SciFi" fetchUrl={requests.fetchSciFi} />
      <Row title="Western" fetchUrl={requests.fetchWestern} />
      <Row title="Animation" fetchUrl={requests.fetchAnimation} />
    </div>
  );
}

export default App;
