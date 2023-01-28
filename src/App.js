import React, { Fragment, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
const url = 'https://swapi.dev/api/films/';

function App() {
  const [movies, setMovies] = useState([]);

  const fetchMoviesHandler = async url => {
    const response = await fetch(url);
    const data = await response.json();
    const transformedMovies = data.results.map(movieData => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      };
    });
    setMovies(transformedMovies);
  };

  return (
    <Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </Fragment>
  );
}

export default App;
