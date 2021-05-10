import React from "react";
import { Link } from "react-router-dom";
import { IMovie } from "../models/models";
import noimg from "../spinner/noimg.jpg";

interface IProps {
  credits: IMovie[];
}

const KnownFor: React.FC<IProps> = ({ credits }) => {
  return (
    <div className='credits'>
      <h3>Known For</h3>
      <div className='credits-container'>
        {credits &&
          credits.map((credit: any) => {
            return (
              <div className='credit' key={credit.id}>
                <div className='img7'>
                  <img
                    src={
                      credit.poster_path
                        ? `https://www.themoviedb.org/t/p/w150_and_h225_bestv2${credit.poster_path}`
                        : noimg
                    }
                    alt=''
                  />
                </div>
                <Link to={`/movies/${credit.id}/${credit.title}`}>
                  {credit.title}
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default KnownFor;
