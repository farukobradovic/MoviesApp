import React from "react";
import { Link } from "react-router-dom";
import { ITvShow } from "../models/models";
import noimg from "../spinner/noimg.jpg";

interface IProps {
  movie: ITvShow;
}

const CardShow: React.FC<IProps> = ({ movie }) => {
  const { id, name, poster_path } = movie;
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
            alt={name}
          />
        </div>
        <div className='desc'>
          <div className='tooltip'>
            <h3>{name.length < 17 ? name : `${name.substring(0, 17)}...`}</h3>
            <span className='tooltiptext'>{name}</span>
          </div>

          <Link to={`/shows/${id}`}>More info...</Link>
        </div>
      </div>
    </>
  );
};

export default CardShow;
