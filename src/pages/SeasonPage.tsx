import { observer } from "mobx-react-lite";
import React, { Fragment, useContext, useEffect } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import Spinner from "../spinner/Spinner";
import { RootStoreContext } from "../stores/rootStore";
import noimg from "../spinner/noimg.jpg";
import Episodes from "../components/Episodes";

interface DetailParams {
  id: string;
  season_number: string;
}
const SeasonPage: React.FC<RouteComponentProps<DetailParams>> = ({ match }) => {
  const { id, season_number } = match.params;
  const rootStore = useContext(RootStoreContext);
  const { season, fetchSeason, loadingSeason } = rootStore.showsStore;

  useEffect(() => {
    fetchSeason(id, season_number);
  }, [id, season_number]);

  if (loadingSeason) {
    return <Spinner />;
  }

  return (
    <Fragment>
      {season && (
        <div className='container'>
          <div className='season'>
            <div className='first-section'>
              <div className='left'>
                <img
                  src={
                    season.poster_path
                      ? `http://image.tmdb.org/t/p/original${season.poster_path}`
                      : noimg
                  }
                  alt=''
                />
              </div>
              <div className='right'>
                <div className='heading-and-button'>
                  <h1>{season.name}</h1>
                  <Link to={`/shows/${id}`} className='button-back'>
                    <i className='fas fa-long-arrow-alt-left'></i> Back
                  </Link>
                </div>
                <p>
                  <span>Date released:</span> {season.air_date}
                </p>
                <p>
                  <span>Episodes: </span>
                  {season.episodes.length}
                </p>
                <p>
                  <span>Overview: </span>
                  {season.overview}
                </p>
              </div>
            </div>
            {season.episodes.length > 0 && (
              <div className='second-section'>
                <h3>Episodes</h3>
                <Episodes episodes={season.episodes} />
              </div>
            )}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default observer(SeasonPage);
