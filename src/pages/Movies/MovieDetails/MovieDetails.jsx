import { getMovieById } from 'components/Movies/MoviesApi/MoviesApi';
import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { GoBack, MovieBox, MovieBtn, MovieImage } from './MovieDetails.styled';

const defaultImg =
  'https://www.repricerexpress.com/wp-content/uploads/2019/07/shutterstock_13308901581.jpg';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();
  const goBack = useRef(location.state?.from || '/');
  useEffect(() => {
    getMovieById(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return;

  return (
    <>
      <MovieBox>
        <MovieBtn>
          <GoBack to={goBack.current}>Go back</GoBack>
        </MovieBtn>
        <MovieImage
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : defaultImg
          }
          alt={movie.title}
          width="300px"
        />
        <h1>{movie.title}</h1>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </MovieBox>
      <Outlet />
    </>
  );
};
