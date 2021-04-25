import axios from "axios";
import { action, makeObservable, observable, runInAction } from "mobx";
import { IMovie, IMovieVideo, ITvShow, ITvShowVideo } from "../models/models";
import { RootStore } from "./rootStore";

export default class MoviesStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    makeObservable(this);
    this.rootStore = rootStore;
  }

  @observable movies: IMovie[] | null = null;
  @observable loadingMovies = false;
  @observable shows: ITvShow[] | null = null;
  @observable loadingShows = false;
  @observable movie: IMovie | null = null;
  @observable loadingMovie = false;
  @observable loadingTvShow = false;
  @observable tvShow: ITvShow | null = null;
  @observable moviesFiltered: IMovie[] | null = null;
  @observable loadingMoviesFiltered = false;
  @observable tvShowsFiltered: ITvShow[] | null = null;
  @observable loadingTvShowsFiltered = false;
  @observable searchText: string | null = null;
  @observable movieScreen = false;
  @observable movieVideo: IMovieVideo[] | null = null;
  @observable loadingMovieVideo = false;
  @observable tvShowVideo: ITvShowVideo[] | null = null;
  @observable loadingTvShowVideo = false;

  @action fetchTopRatedMovies = async () => {
    this.loadingMovies = true;
    try {
      var movies = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`
      );

      runInAction(() => {
        this.movies = movies.data.results.slice(0, 10);
        this.loadingMovies = false;
      });
    } catch (err) {
      runInAction(() => {
        this.loadingMovies = false;
      });
      console.log(err);
    }
  };

  @action fetchTopRatedTVShows = async () => {
    this.loadingShows = true;
    try {
      var shows = await axios.get(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}`
      );

      runInAction(() => {
        this.shows = shows.data.results.slice(0, 10);
        this.loadingShows = false;
      });
    } catch (err) {
      runInAction(() => {
        this.loadingShows = false;
      });
      console.log(err);
    }
  };

  @action fetchMovie = async (id: string) => {
    this.loadingMovie = true;
    try {
      var movie = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );

      runInAction(() => {
        this.movie = movie.data;
        this.loadingMovie = false;
      });
    } catch (err) {
      runInAction(() => {
        this.loadingMovie = false;
        console.log(err);
      });
    }
  };

  @action fetchTvShow = async (id: string) => {
    this.loadingTvShow = true;
    try {
      var tvShow = await axios.get(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_API_KEY}`
      );

      runInAction(() => {
        this.tvShow = tvShow.data;
        this.loadingTvShow = false;
      });
    } catch (err) {
      runInAction(() => {
        this.loadingTvShow = false;
        console.log(err);
      });
    }
  };

  @action fetchMoviesBySearch = async (text: string) => {
    this.loadingMoviesFiltered = true;
    try {
      var movies = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${text}&page=1&include_adult=false`
      );

      runInAction(() => {
        this.moviesFiltered = movies.data.results.slice(0, 10);
        this.loadingMoviesFiltered = false;
      });
    } catch (err) {
      runInAction(() => {
        this.loadingMoviesFiltered = false;
      });
      console.log(err);
    }
  };

  @action fetchTvShowsBySearch = async (text: string) => {
    this.loadingTvShowsFiltered = true;
    try {
      var shows = await axios.get(
        `https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&query=${text}&include_adult=false`
      );

      runInAction(() => {
        this.tvShowsFiltered = shows.data.results.slice(0, 10);
        this.loadingTvShowsFiltered = false;
      });
    } catch (err) {
      runInAction(() => {
        this.loadingTvShowsFiltered = false;
      });
      console.log(err);
    }
  };

  @action setSearchText = (text: string) => {
    runInAction(() => {
      this.searchText = text;
    });
  };

  @action setMovieScreen = (movie: boolean) => {
    runInAction(() => {
      this.movieScreen = movie;
    });
  };

  @action clearFilteredResults = () => {
    runInAction(() => {
      this.moviesFiltered = null;
      this.tvShowsFiltered = null;
    });
  };

  @action fetchMovieVideo = async (id: string) => {
    this.loadingMovieVideo = true;
    try {
      var video = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );

      runInAction(() => {
        this.movieVideo =
          video.data.results.length > 0 ? video.data.results : null;
        this.loadingMovieVideo = false;
      });
    } catch (err) {
      runInAction(() => {
        this.loadingMovieVideo = false;
      });
      console.log(err);
    }
  };
  @action fetchTvShowVideo = async (id: string) => {
    this.loadingTvShowVideo = true;
    try {
      var video = await axios.get(
        `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );

      runInAction(() => {
        this.tvShowVideo =
          video.data.results.length > 0 ? video.data.results : null;
        this.loadingTvShowVideo = false;
      });
    } catch (err) {
      runInAction(() => {
        this.loadingTvShowVideo = false;
      });
      console.log(err);
    }
  };
}
