import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Spinner from "../spinner/Spinner";
import { RootStoreContext } from "../stores/rootStore";

const SocialLinksShows = () => {
  const rootStore = useContext(RootStoreContext);
  const { socialShow } = rootStore.showsStore;

  return (
    <div className='social-links'>
      {socialShow && socialShow.facebook_id && (
        <a href={`https://www.facebook.com/${socialShow.facebook_id}`}>
          <i className='fab fa-facebook'></i>
        </a>
      )}
      {socialShow && socialShow.imdb_id && (
        <a href={`https://www.imdb.com/title/${socialShow.imdb_id}`}>
          <i className='fab fa-imdb'></i>
        </a>
      )}
      {socialShow && socialShow.instagram_id && (
        <a href={`https://www.instagram.com/${socialShow.instagram_id}`}>
          <i className='fab fa-instagram'></i>
        </a>
      )}
      {socialShow && socialShow.twitter_id && (
        <a href={`https://twitter.com/${socialShow.twitter_id}`}>
          <i className='fab fa-twitter'></i>
        </a>
      )}
    </div>
  );
};

export default observer(SocialLinksShows);
