import { MoviesList } from 'components/Movies/MoviesList/MoviesList';
import { getTrendingMovies } from 'components/Movies/MoviesApi/MoviesApi';
import { SearchMovie } from 'components/Movies/SearchMovie/SearchMovie';
import React, { useEffect, useState } from 'react';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrendingMovies().then(setMovies);
  }, []);
  return (
    <>
      <SearchMovie />
      <MoviesList movies={movies} />
    </>
  );
};

export default Movies;
