import { getMovieById } from 'components/Movies/MoviesApi/MoviesApi';
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import {
  MovieBox,
  MovieHeader,
  MovieImage,
  MovieLi,
  MovieLink,
  MovieUl,
} from './MovieDetails.styled';

const defaultImg =
  'https://www.repricerexpress.com/wp-content/uploads/2019/07/shutterstock_13308901581.jpg';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieById(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return;

  return (
    <>
      <MovieBox>
        <MovieImage
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : defaultImg
          }
          alt={movie.title}
          width="300px"
        />
        <MovieHeader>{movie.title}</MovieHeader>
        <MovieUl>
          <MovieLi>
            <MovieLink to="cast">Cast</MovieLink>
          </MovieLi>
          <MovieLi>
            <MovieLink to="reviews">Reviews</MovieLink>
          </MovieLi>
        </MovieUl>
      </MovieBox>
      <Outlet />
    </>
  );
};
