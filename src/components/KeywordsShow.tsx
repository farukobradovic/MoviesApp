import React, { useContext } from "react";
import Spinner from "../spinner/Spinner";
import { RootStoreContext } from "../stores/rootStore";

const KeywordsShow = () => {
  const rootStore = useContext(RootStoreContext);
  const { keywordsShow, loadingKeywordsShow } = rootStore.showsStore;
  //   if (loadingKeywordsShow) {
  //     return <Spinner />;
  //   }

  return (
    <div className='keywords'>
      <h3>{keywordsShow.length > 0 && "Keywords"}</h3>
      <div className='words'>
        {keywordsShow.map((keyword: any) => {
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

export default KeywordsShow;
