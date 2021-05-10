export interface IMovie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  backdrop_path: string;
  tagline: string;
  genres: [{ id: number; name: string }];
  runtime: number;
}

export interface ITvShow {
  id: number;
  name: string;
  poster_path: string;
  overview: string;
  backdrop_path: string;
  genres: [{ id: number; name: string }];
  tagline: string;
  seasons: [
    { id: number; episode_count: number; name: string; poster_path: string }
  ];
  created_by: [{ id: string; name: string; profile_path: string }];
}

export interface ICredit {
  id: number;
  name: string;
  profile_path: string;
  character: string;
}

export interface IKeyword {
  id: number;
  name: string;
}

export interface ISocial {
  imdb_id: string;
  facebook_id: string;
  instagram_id: string;
  twitter_id: string;
}

export interface IPerson {
  biography: string;
  birthday: string;
  gender: number;
  known_for_department: string;
  name: string;
  profile_path: string;
  popularity: string;
  id: number;
  place_of_birth: string;
}

export interface IMovieVideo {
  site: string;
  key: string;
}

export interface ITvShowVideo {
  site: string;
  key: string;
}
