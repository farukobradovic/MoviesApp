import React, { useState } from "react";

interface IProps {
  actings: any;
}

const Actings: React.FC<IProps> = ({ actings }) => {
  const [filteredActings, setFilteredActings] = useState(actings);
  const handleChange = (e: any) => {
    if (e.target.value === "all") {
      setFilteredActings(actings);
    }
    if (e.target.value === "movies") {
      let temp = actings.filter(
        (acting: any) => acting.media_type === "movie" && acting.release_date
      );
      temp = temp.sort(
        (a: any, b: any) =>
          b.release_date.substring(0, 4) - a.release_date.substring(0, 4)
      );
      setFilteredActings(temp);
    }
    if (e.target.value === "shows") {
      let temp = actings.filter(
        (acting: any) => acting.media_type === "tv" && acting.first_air_date
      );

      // console.log(temp);
      temp = temp.sort(
        (a: any, b: any) =>
          b.first_air_date.substring(0, 4) - a.first_air_date.substring(0, 4)
      );
      setFilteredActings(temp);
    }
  };
  return (
    <div className='acting'>
      <div className='acting-filter'>
        <h3>
          Acting{" "}
          <span style={{ fontSize: "1.4rem" }}>({filteredActings.length})</span>
        </h3>
        <div className='filters'>
          <select name='filters' onChange={handleChange}>
            <option value='all'>All</option>
            <option value='movies'>Movies</option>
            <option value='shows'>Tv Shows</option>
          </select>
        </div>
      </div>
      <div className='acting-list'>
        {filteredActings.map((acting: any, index: any) => {
          return (
            <div className='row' key={index}>
              {acting.media_type === "movie" ? (
                <p>
                  {acting.release_date
                    ? acting.release_date.substring(0, 4)
                    : "0000"}{" "}
                  <span className='span1'>{acting.title} </span>{" "}
                  <span className='span2'> as</span>{" "}
                  <span className='span3'>
                    {" "}
                    {acting.character ? acting.character : "Unknown"}
                  </span>
                </p>
              ) : (
                <p>
                  {acting.first_air_date
                    ? acting.first_air_date.substring(0, 4)
                    : "0000"}{" "}
                  <span className='span1'>{acting.name} </span>{" "}
                  <span className='span2'>
                    ({acting.episode_count} episode/s) as
                  </span>{" "}
                  <span className='span3'>
                    {" "}
                    {acting.character ? acting.character : "Unknown"}
                  </span>
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Actings;
