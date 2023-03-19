import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from 'Api/Api';

import { MovieCard } from 'components/MovieCard';
export const MovieDetails = () => {
  const [movie, setMovie] = useState([]);

  const { movieId } = useParams();
  useEffect(() => {
    const fetchMovies = async () => {
      const result = await api.getMoviesInfo(movieId);
      setMovie(result.data);
    };
    if (movieId) {
      // console.log(movie);
      fetchMovies();
    }
  }, []);
  console.log(movie);

  return <MovieCard movie={movie} />;
};