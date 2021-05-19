import React from "react";
import Spinner from "../spinner/Spinner";
import noimg from "../spinner/noimg.jpg";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";

interface IProps {
  movies: any;
  loading: boolean;
  type: string;
}

const Recommendations: React.FC<IProps> = ({ movies, loading, type }) => {
  if (loading) {
    return <Spinner />;
  }
  return (
    <div className='recommendations'>
      {movies &&
        movies.map((movie: any) => {
          return (
            <div className='card' key={movie.id}>
              <div className='img5'>
                <img
                  src={
                    movie.poster_path
                      ? `https://www.themoviedb.org/t/p/w250_and_h141_face/${movie.poster_path}`
                      : noimg
                  }
                  alt=''
                />
              </div>
              {type === "movie" ? (
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              ) : (
                <Link to={`/shows/${movie.id}`}>{movie.name}</Link>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default observer(Recommendations);
