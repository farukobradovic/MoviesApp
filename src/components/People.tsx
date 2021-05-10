import React from "react";
import Spinner from "../spinner/Spinner";
import noimg from "../spinner/noUser.png";
import { Link } from "react-router-dom";
import { ICredit } from "../models/models";

interface IProps {
  loading: boolean;
  cast: ICredit[];
}

const People: React.FC<IProps> = ({ loading, cast }) => {
  if (loading) {
    return <Spinner />;
  }
  return (
    <div className='people'>
      {cast &&
        cast.map((person: any) => {
          return (
            <Link
              to={`/people/${person.id}/${person.name}`}
              className='people-card'
              key={person.id}
            >
              <div className='img3'>
                <img
                  src={
                    person.profile_path
                      ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${person.profile_path}`
                      : noimg
                  }
                  alt={person.name}
                />
              </div>
              <h4>{person.name}</h4>
              <p>{person.character}</p>
            </Link>
          );
        })}
    </div>
  );
};

export default People;
