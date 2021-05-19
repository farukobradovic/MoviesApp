import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import Spinner from "../spinner/Spinner";
import { RootStoreContext } from "../stores/rootStore";
import noimg from "../spinner/noimg.jpg";
import { Fragment } from "react";
import People from "../components/People";
import SocialKeyMovie from "../components/SocialKeyMovie";
import Recommendations from "../components/Recommendations";
import CreatedBy from "../components/CreatedBy";
import Seasons from "../components/Seasons";

interface DetailParams {
  id: string;
}

const ShowPage: React.FC<RouteComponentProps<DetailParams>> = ({ match }) => {
  const { id } = match.params;
  const rootStore = useContext(RootStoreContext);
  const {
    loadingTvShow,
    tvShow,
    fetchTvShow,
    setMovieScreen,
    tvShowVideo,
    fetchTvShowVideo,
  } = rootStore.commonStore;

  const {
    fetchShowCredits,
    credits,
    loadingCredits,
    fetchKeywordsShow,
    loadingKeywordsShow,
    fetchSocialMovie,
    fetchRecommendShows,
    loadingRecommendShow,
    recommendShows,
  } = rootStore.showsStore;

  useEffect(() => {
    fetchTvShow(id);
    fetchTvShowVideo(id);
    setMovieScreen(false);
    fetchShowCredits(id);
    fetchKeywordsShow(id);
    fetchSocialMovie(id);
    fetchRecommendShows(id);
  }, [id]);

  if (loadingTvShow || loadingKeywordsShow) {
    return <Spinner />;
  }

  return (
    <Fragment>
      {tvShow && (
        <div className='container-full'>
          <div className='img'>
            <img
              src={
                tvShow.backdrop_path
                  ? `http://image.tmdb.org/t/p/original${tvShow.backdrop_path}`
                  : noimg
              }
              alt={tvShow.name}
            />
          </div>
          <div className='container-in'>
            <div className='movie-info'>
              <div className='img2'>
                <img
                  src={
                    tvShow.poster_path
                      ? `http://image.tmdb.org/t/p/original/${tvShow.poster_path}`
                      : noimg
                  }
                  alt={tvShow.name}
                />
              </div>
              <div className='desc'>
                <h1>{tvShow.name}</h1>
                <p>
                  {tvShow.genres && tvShow.genres.length > 0
                    ? tvShow.genres[0].name
                    : "Unknown genre"}{" "}
                  -{" "}
                  {tvShow.seasons && tvShow.seasons.length > 0
                    ? tvShow.seasons.length
                    : "Unknown number of"}{" "}
                  seasons
                </p>
                <div className='circles'>
                  <button type='button'>
                    <i className='fas fa-list'></i>
                  </button>
                  <button type='button'>
                    <i className='fas fa-heart'></i>
                  </button>
                  <button type='button'>
                    <i className='fas fa-bookmark'></i>
                  </button>
                  <button type='button'>
                    <i className='fas fa-star'></i>
                  </button>
                  {tvShowVideo && tvShowVideo.length > 0 && (
                    <a
                      href={`https://www.youtube.com/watch?v=${tvShowVideo[0].key}`}
                      target='blank'
                      className='youtube-link'
                    >
                      <i className='fas fa-play'></i>Play Trailer
                    </a>
                  )}
                </div>
                <p className='tagline'>{tvShow.tagline && tvShow.tagline}</p>
                <h3>Overview</h3>
                <p>{tvShow.overview}</p>
                {tvShow.created_by && tvShow.created_by.length > 0 && (
                  <CreatedBy show={tvShow} />
                )}
                <Link to='/' className='button-back'>
                  <i className='fas fa-long-arrow-alt-left'></i> Back
                </Link>
              </div>
            </div>
          </div>
          <div className='container'>
            <h3>Series Cast</h3>
            <div className='split'>
              <People loading={loadingCredits} cast={credits} />
              <SocialKeyMovie type='show' />
            </div>
          </div>
          <div className='container'>
            <h3>Recommendations</h3>
            <Recommendations
              movies={recommendShows}
              loading={loadingRecommendShow}
              type='show'
            />
          </div>
          {tvShow && tvShow.seasons && tvShow.seasons.length > 0 && (
            <Seasons seasons={tvShow.seasons} id={tvShow.id} />
          )}
        </div>
      )}
    </Fragment>
  );
};
export default observer(ShowPage);
