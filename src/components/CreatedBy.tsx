import React from "react";
import { Link } from "react-router-dom";
import { ITvShow } from "../models/models";
import noimg from "../spinner/noUser.png";

interface IProps {
  show: ITvShow;
}
const CreatedBy: React.FC<IProps> = ({ show }) => {
  return (
    <div className='created-by'>
      <h3>Created By: </h3>
      {show &&
        show.created_by.map((person) => {
          return (
            <div className='created-by-grid' key={person.id}>
              <div className='card'>
                <Link to={`/people/${person.id}`}>
                  <img
                    src={
                      person.profile_path
                        ? `http://image.tmdb.org/t/p/original${person.profile_path}`
                        : noimg
                    }
                    alt='person'
                  />
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default CreatedBy;
