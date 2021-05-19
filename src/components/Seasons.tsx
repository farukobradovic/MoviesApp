import React from "react";
import { Link } from "react-router-dom";
import { ITvShow } from "../models/models";
import noimg from "../spinner/noimg.jpg";

interface IProps {
  seasons: any;
  id: any;
}
const Seasons: React.FC<IProps> = ({ seasons, id }) => {
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
                <Link
                  to={`/season/${id}/season_number/${season.season_number}`}
                >
                  {season.name}
                </Link>
                <p>{season.episode_count} episodes.</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Seasons;
