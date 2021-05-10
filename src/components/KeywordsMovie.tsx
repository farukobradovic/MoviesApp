import React from "react";
import { useContext } from "react";
import Spinner from "../spinner/Spinner";
import { RootStoreContext } from "../stores/rootStore";

const KeywordsMovie = () => {
  const rootStore = useContext(RootStoreContext);
  const { keywordsMovie, loadingKeywordsMovie } = rootStore.commonStore;

  if (loadingKeywordsMovie) {
    return <Spinner />;
  }
  return (
    <div className='keywords'>
      <h3>{keywordsMovie!.length > 0 && "Keywords"}</h3>
      <div className='words'>
        {keywordsMovie!.map((keyword: any) => {
          return (
            <div className='keyword' key={keyword.id}>
              {keyword.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default KeywordsMovie;
