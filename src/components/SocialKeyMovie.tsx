import React from "react";
import KeywordsMovie from "./KeywordsMovie";
import KeywordsShow from "./KeywordsShow";
import SocialLinksMovie from "./SocialLinksMovie";
import SocialLinksShows from "./SocialLinksShows";

interface IProps {
  type: string;
}

const SocialKeyMovie: React.FC<IProps> = ({ type }) => {
  return (
    <div className='flex-column'>
      {type === "movie" ? <SocialLinksMovie /> : <SocialLinksShows />}
      {type === "movie" ? <KeywordsMovie /> : <KeywordsShow />}
    </div>
  );
};

export default SocialKeyMovie;
