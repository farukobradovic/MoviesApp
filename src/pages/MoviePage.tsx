import { observer } from "mobx-react-lite";
import React, { Fragment, useContext, useEffect } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import Spinner from "../spinner/Spinner";
import { RootStoreContext } from "../stores/rootStore";
import noimg from "../spinner/noimg.jpg";
import People from "../components/People";
import SocialKeyMovie from "../components/SocialKeyMovie";
import Recommendations from "../components/Recommendations";

interface DetailParams {
  id: string;
}

const MoviePage: React.FC<RouteComponentProps<DetailParams>> = ({ match }) => {
  const { id } = match.params;
  const rootStore = useContext(RootStoreContext);
  const {
    movie,
    loadingMovie,
    fetchMovie,
    setMovieScreen,
    fetchMovieVideo,
    movieVideo,
    fetchMovieCredits,
    credits,
    loadingCredits,
    fetchKeywordsMovie,
    keywordsMovie,
    loadingKeywordsMovie,
    fetchSocialMovie,
    loadingSocialMovie,
    fetchRecommendMovies,
    recommendMovies,
    loadingRecommendMovie,
  } = rootStore.commonStore;

  useEffect(() => {
    fetchMovie(id);
    fetchMovieVideo(id);
    setMovieScreen(true);
    fetchMovieCredits(id);
    fetchKeywordsMovie(id);
    fetchSocialMovie(id);
    fetchRecommendMovies(id);
  }, [id]);

  if (loadingMovie || loadingSocialMovie) {
    return <Spinner />;
  }

  return (
    <Fragment>
      {movie && (
        <div className='container-full'>
          <div className='img'>
            <img
              src={
                movie.backdrop_path
                  ? `http://image.tmdb.org/t/p/original${movie.backdrop_path}`
                  : noimg
              }
              alt={movie.title}
            />
          </div>
          <div className='container-in'>
            <div className='movie-info'>
              <div className='img2'>
                <img
                  src={
                    movie.poster_path
                      ? `http://image.tmdb.org/t/p/original/${movie.poster_path}`
                      : noimg
                  }
                  alt={movie.title}
                />
              </div>
              <div className='desc'>
                <h1>{movie.title}</h1>
                <p>
                  {movie.genres && movie.genres.length > 0
                    ? movie.genres[0].name
                    : "Unknown genre"}
                  -{" "}
                  {movie.runtime && movie.runtime > 0
                    ? movie.runtime
                    : "Unknown runtime "}
                  m
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
                  {movieVideo && movieVideo.length > 0 && (
                    <a
                      href={`https://www.youtube.com/watch?v=${movieVideo[0].key}`}
                      target='blank'
                      className='youtube-link'
                    >
                      <i className='fas fa-play'></i>Play Trailer
                    </a>
                  )}
                </div>
                <p className='tagline'>{movie.tagline && movie.tagline}</p>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
                <Link to='/' className='button-back'>
                  <i className='fas fa-long-arrow-alt-left'></i> Back
                </Link>
              </div>
            </div>
          </div>
          <div className='container'>
            <h3>Series Cast</h3>
            <div className='split'>
              <People loading={loadingCredits} cast={credits!} />
              <SocialKeyMovie type='movie' />
            </div>
          </div>
          <div className='container'>
            <h3>Recommendations</h3>
            <Recommendations
              movies={recommendMovies}
              loading={loadingRecommendMovie}
              type='movie'
            />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default observer(MoviePage);
