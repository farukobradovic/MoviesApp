import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import Buttons from "../components/Buttons";
import Card from "../components/Card";
import CardShow from "../components/CardShow";
import Search from "../components/Search";
import Trending from "../components/Trending";
import { IMovie, ITvShow } from "../models/models";
import Spinner from "../spinner/Spinner";
import { RootStoreContext } from "../stores/rootStore";

const HomePage = () => {
  const rootStore = useContext(RootStoreContext);
  const {
    fetchTopRatedMovies,
    loadingMovies,
    movies,
    fetchTopRatedTVShows,
    shows,
    fetchMoviesBySearch,
    moviesFiltered,
    setSearchText,
    movieScreen,
    fetchTvShowsBySearch,
    tvShowsFiltered,
    searchText,
    fetchTrending,
    loadingTrending,
    trending,
  } = rootStore.commonStore;
  const [moviesClicked, setMoviesClicked] = useState(
    movieScreen ? true : false
  );
  const [text, setText] = useState(searchText ? searchText : "");
  useEffect(() => {
    if (!movies || !shows) {
      fetchTopRatedMovies();
      fetchTopRatedTVShows();
      fetchTrending();
    }
  }, []);

  useEffect(() => {
    setSearchText(text);
    if (text.length >= 3) {
      const timeout = setTimeout(() => {
        fetchMoviesBySearch(text);
        fetchTvShowsBySearch(text);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [text]);

  if (loadingMovies) {
    return <Spinner />;
  }

  return (
    <div className='container container-split'>
      <div className='content'>
        <Buttons
          moviesClicked={moviesClicked}
          setMoviesClicked={setMoviesClicked}
        />
        <Search text={text} setText={setText} />
        <div className='main'>
          {text.length >= 3 &&
            moviesClicked &&
            moviesFiltered &&
            moviesFiltered.map((movie: IMovie) => {
              return <Card movie={movie} key={movie.id} />;
            })}
          {text.length >= 3 &&
            !moviesClicked &&
            tvShowsFiltered &&
            tvShowsFiltered.map((movie: ITvShow) => {
              return <CardShow movie={movie} key={movie.id} />;
            })}
          {text.length < 3 && moviesClicked
            ? movies &&
              movies.map((movie: IMovie) => {
                return <Card movie={movie} key={movie.id} />;
              })
            : shows &&
              text.length < 3 &&
              shows.map((movie: ITvShow) => {
                return <CardShow movie={movie} key={movie.id} />;
              })}
        </div>
      </div>
      <div className='content2'>
        <h3>Trending</h3>
        <Trending loading={loadingTrending} trending={trending} />
      </div>
    </div>
  );
};

export default observer(HomePage);
