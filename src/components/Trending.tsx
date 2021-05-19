import React from "react";
import { Link } from "react-router-dom";
import Spinner from "../spinner/Spinner";

interface IProps {
  trending: any;
  loading: any;
}

const Trending: React.FC<IProps> = ({ loading, trending }) => {
  if (loading) {
    return <Spinner />;
  }
  return (
    <div className='trending'>
      {trending &&
        trending.map((item: any) => {
          return (
            <div className='card' key={item.id}>
              <img
                src={`http://image.tmdb.org/t/p/original${item.poster_path}`}
                alt=''
              />
              <Link to={`/movies/${item.id}`}>{item.title}</Link>
              <p>Rate: {item.vote_average}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Trending;
