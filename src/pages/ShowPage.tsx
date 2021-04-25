import { observable } from "mobx";
import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import Spinner from "../spinner/Spinner";
import { RootStoreContext } from "../stores/rootStore";
import noimg from "../spinner/noimg.jpg";

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

  useEffect(() => {
    fetchTvShow(id);
    fetchTvShowVideo(id);
    setMovieScreen(false);
  }, [id]);

  if (loadingTvShow) {
    return <Spinner />;
  }

  return (
    <>
      {tvShow && (
        <div className='container'>
          <div className='content'>
            <div className='linkButton'>
              <Link to='/' className='button active'>
                <i className='fas fa-long-arrow-alt-left'></i> Back
              </Link>
            </div>
            {tvShowVideo &&
            tvShowVideo.length > 0 &&
            tvShowVideo[0].site === "YouTube" ? (
              <div className='article'>
                <div className='video-article'>
                  <iframe
                    src={`https://www.youtube.com/embed/${tvShowVideo[0].key}`}
                    title='YouTube video player'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  ></iframe>
                </div>
                <h2>{tvShow.name}</h2>
                <p className='p-bold'>Movie Overview: </p>
                <p>{tvShow.overview}</p>
              </div>
            ) : (
              <div className='article'>
                <div className='img-article'>
                  <img
                    src={
                      tvShow.poster_path
                        ? `http://image.tmdb.org/t/p/original/${tvShow.poster_path}`
                        : noimg
                    }
                  />
                </div>
                <h2>{tvShow.name}</h2>
                <p className='p-bold'>Movie Overview: </p>
                <p>{tvShow.overview}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default observer(ShowPage);
