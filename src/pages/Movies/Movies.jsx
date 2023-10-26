import { MoviesList } from 'components/Movies/MoviesList/MoviesList';
import {
  getSearchMovie,
  getTrendingMovies,
} from 'components/Movies/MoviesApi/MoviesApi';
import { SearchMovie } from 'components/Movies/SearchMovie/SearchMovie';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) return;
    getSearchMovie(query).then(setMovies);
  }, [searchParams]);
  const handleSubmit = query => {
    setSearchParams({ query });
  };

  useEffect(() => {
    getTrendingMovies().then(setMovies);
  }, []);

  return (
    <>
      <SearchMovie onSubmit={handleSubmit} />
      <MoviesList movies={movies} />
    </>
  );
};

export default Movies;
