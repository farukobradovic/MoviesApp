import { observer } from "mobx-react-lite";
import React, { Fragment, useContext, useEffect } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import Spinner from "../spinner/Spinner";
import { RootStoreContext } from "../stores/rootStore";
import noimg from "../spinner/noimg.jpg";

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
  } = rootStore.commonStore;

  useEffect(() => {
    fetchMovie(id);
    fetchMovieVideo(id);
    setMovieScreen(true);
  }, [id]);

  if (loadingMovie) {
    return <Spinner />;
  }

  return (
    <Fragment>
      {movie && (
        <div className='container'>
          <div className='content'>
            <div className='linkButton'>
              <Link to='/' className='button active'>
                <i className='fas fa-long-arrow-alt-left'></i> Back
              </Link>
            </div>
            <div className='article'>
              {movieVideo &&
              movieVideo.length > 0 &&
              movieVideo[0].site === "YouTube" ? (
                <div className='video-article'>
                  <iframe
                    src={`https://www.youtube.com/embed/${movieVideo[0].key}`}
                    title='YouTube video player'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  ></iframe>
                </div>
              ) : (
                <div className='img-article'>
                  <img
                    src={
                      movie.poster_path
                        ? `http://image.tmdb.org/t/p/original/${movie.poster_path}`
                        : noimg
                    }
                  />
                </div>
              )}

              <h2>{movie.title}</h2>
              <p className='p-bold'>Movie Overview: </p>
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default observer(MoviePage);
