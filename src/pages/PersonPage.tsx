import React, { Fragment, useContext, useEffect } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { RootStoreContext } from "../stores/rootStore";
import noimg from "../spinner/noUser.png";
import Spinner from "../spinner/Spinner";
import { observer } from "mobx-react-lite";
import { getBirthday } from "../utils/helper";
import KnownFor from "../components/KnownFor";

interface DetailParams {
  id: string;
}

const PersonPage: React.FC<RouteComponentProps<DetailParams>> = ({ match }) => {
  const { id } = match.params;
  const rootStore = useContext(RootStoreContext);
  const {
    fetchPerson,
    person,
    loadingPerson,
    fetchPersonCredits,
    personCredits,
    loadingPersonCredits,
  } = rootStore.commonStore;

  useEffect(() => {
    fetchPerson(id);
    fetchPersonCredits(id);
  }, [id]);

  if (loadingPerson || loadingPersonCredits) {
    return <Spinner />;
  }

  return (
    <Fragment>
      {person && (
        <div className='container'>
          <div className='actor'>
            <div className='left'>
              <div className='img6'>
                <img
                  src={
                    person.profile_path
                      ? `http://image.tmdb.org/t/p/original${person.profile_path}`
                      : noimg
                  }
                  alt={person.name}
                />
              </div>
              <h3>Personal Info</h3>
              {person.known_for_department && (
                <p>
                  {" "}
                  Known For <span>{person.known_for_department}</span>
                </p>
              )}

              {person.gender && (
                <p>
                  {" "}
                  Gender <span>{person.gender === 1 ? "Female" : "Male"}</span>
                </p>
              )}
              {person.birthday && (
                <p>
                  {" "}
                  Birthday{" "}
                  <span>
                    {person.birthday} ({getBirthday(person.birthday)} years
                    old.)
                  </span>
                </p>
              )}

              {person.place_of_birth! && (
                <p>
                  {" "}
                  Place of Birth <span>{person.place_of_birth}</span>
                </p>
              )}
              {person.popularity && (
                <p>
                  {" "}
                  Popularity <span>{person.popularity}</span>
                </p>
              )}
              <button type='button'>Report an issue</button>
            </div>
            <div className='right'>
              <div className='heading-button'>
                <h1>{person.name}</h1>
                <Link to='/'>
                  <i className='fas fa-long-arrow-alt-left'></i> Back
                </Link>
              </div>
              <h3>Biography</h3>
              <p>{person.biography}</p>
              <KnownFor credits={personCredits!} />
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default observer(PersonPage);
