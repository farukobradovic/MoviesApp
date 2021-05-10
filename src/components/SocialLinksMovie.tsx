import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Spinner from "../spinner/Spinner";
import { RootStoreContext } from "../stores/rootStore";

const SocialLinksMovie = () => {
  const rootStore = useContext(RootStoreContext);
  const { socialMovie, loadingSocialMovie } = rootStore.commonStore;

  //   if (loadingSocialMovie) {
  //     return <Spinner />;
  //   }

  return (
    <div className='social-links'>
      {socialMovie && socialMovie.facebook_id && (
        <a href={`https://www.facebook.com/${socialMovie.facebook_id}`}>
          <i className='fab fa-facebook'></i>
        </a>
      )}
      {socialMovie && socialMovie.imdb_id && (
        <a href={`https://www.imdb.com/title/${socialMovie.imdb_id}`}>
          <i className='fab fa-imdb'></i>
        </a>
      )}
      {socialMovie && socialMovie.instagram_id && (
        <a href={`https://www.instagram.com/${socialMovie.instagram_id}`}>
          <i className='fab fa-instagram'></i>
        </a>
      )}
      {socialMovie && socialMovie.twitter_id && (
        <a href={`https://twitter.com/${socialMovie.twitter_id}`}>
          <i className='fab fa-twitter'></i>
        </a>
      )}
    </div>
  );
};

export default SocialLinksMovie;
