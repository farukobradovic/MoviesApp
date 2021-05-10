import React from "react";
import { ITvShow } from "../models/models";
import noimg from "../spinner/noimg.jpg";

interface IProps {
  seasons: any;
}
const Seasons: React.FC<IProps> = ({ seasons }) => {
  return (
    <div className='container'>
      <h3>Seasons</h3>
      <div className='seasons'>
        {seasons &&
          seasons.map((season: any) => {
            return (
              <div className='card' key={season.id}>
                <div className='img5'>
                  <img
                    src={
                      season.poster_path
                        ? `https://www.themoviedb.org/t/p/w250_and_h141_face${season.poster_path}`
                        : noimg
                    }
                    alt='season'
                  />
                </div>
                <p style={{ fontSize: "1.6rem" }}>{season.name}</p>
                <p>{season.episode_count} episodes.</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Seasons;
