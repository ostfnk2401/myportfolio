import { getMovieReviews } from 'components/Movies/MoviesApi/MoviesApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getMovieReviews(movieId).then(setReviews);
  }, [movieId]);
  return (
    <>
      {reviews.length === 0 ? (
        <p>No reviews</p>
      ) : (
        <ul>
          {reviews.map(item => (
            <li key={item.id}>
              <h3>{item.author}</h3>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
