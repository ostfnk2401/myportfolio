import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  MoviesImg,
  MoviesItem,
  MoviesLink,
  MoviesTitle,
  MoviesUl,
} from './MoviesList.styled';
const defaultImg =
  'https://www.repricerexpress.com/wp-content/uploads/2019/07/shutterstock_13308901581.jpg';
export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <MoviesUl>
        {movies.map(movie => (
          <MoviesItem key={movie.id}>
            <MoviesLink to={`/movies/${movie.id}`} state={{ from: location }}>
              {
                <MoviesImg
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                      : defaultImg
                  }
                  alt={movie.title}
                  width="200px"
                />
              }
              {<MoviesTitle>{movie.title}</MoviesTitle>}
            </MoviesLink>
          </MoviesItem>
        ))}
      </MoviesUl>
    </>
  );
};
