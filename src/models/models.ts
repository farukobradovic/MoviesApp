export interface IMovie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}

export interface ITvShow {
  id: number;
  name: string;
  poster_path: string;
  overview: string;
}

export interface IMovieVideo {
  site: string;
  key: string;
}

export interface ITvShowVideo {
  site: string;
  key: string;
}
