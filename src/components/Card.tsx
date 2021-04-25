import React from "react";
import { Link } from "react-router-dom";
import { IMovie } from "../models/models";
import noimg from "../spinner/noimg.jpg";

interface IProps {
  movie: IMovie;
}

const Card: React.FC<IProps> = ({ movie }) => {
  const { id, title, poster_path } = movie;
  return (
    <>
      <div className='card'>
        <div className='img'>
          <img
            src={
              poster_path
                ? `http://image.tmdb.org/t/p/original/${poster_path}`
                : noimg
            }
            alt={title}
          />
        </div>
        <div className='desc'>
          <h3>{title}</h3>
          <Link to={`/movies/${id}`}>More info...</Link>
        </div>
      </div>
    </>
  );
};

export default Card;
