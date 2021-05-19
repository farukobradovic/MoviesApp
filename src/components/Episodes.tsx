import React from "react";
import noimg from "../spinner/noimg.jpg";

interface IProps {
  episodes: any;
}

const Episodes: React.FC<IProps> = ({ episodes }) => {
  return (
    <div className='episodes-grid'>
      {episodes.map((episode: any, index: any) => {
        return (
          <div className='card' key={episode.id}>
            <div className='img-left'>
              <img
                src={
                  episode.still_path
                    ? `http://image.tmdb.org/t/p/original${episode.still_path}`
                    : noimg
                }
                alt=''
              />
            </div>
            <div className='desc'>
              <h3>
                Ep {index + 1}: {episode.name}
              </h3>
              <p>
                <span>Overview: </span>
                {episode.overview}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Episodes;
