import axios from "axios";
import { action, makeObservable, observable, runInAction } from "mobx";
import { RootStore } from "./rootStore";

export default class ShowsStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    makeObservable(this);
    this.rootStore = rootStore;
  }

  @observable loadingCredits = false;
  @observable credits: any | null = null;
  @observable loadingKeywordsShow = false;
  @observable keywordsShow: any | null = null;
  @observable loadingSocialShow = false;
  @observable socialShow: any | null = null;
  @observable loadingRecommendShow = false;
  @observable recommendShows: any | null = null;

  @action fetchShowCredits = async (id: string) => {
    this.loadingCredits = true;
    try {
      const credits = await axios.get(
        `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      // console.log(credits.data.cast);
      runInAction(() => {
        this.credits = credits.data.cast.slice(0, 5);
        this.loadingCredits = false;
      });
    } catch (err) {
      runInAction(() => {
        this.loadingCredits = false;
      });
      console.log(err);
    }
  };
  @action fetchKeywordsShow = async (id: string) => {
    this.loadingKeywordsShow = true;
    try {
      const keywords = await axios.get(
        `https://api.themoviedb.org/3/tv/${id}/keywords?api_key=${process.env.REACT_APP_API_KEY}`
      );
      // console.log(keywords.data.results);
      runInAction(() => {
        this.keywordsShow = keywords.data.results.slice(0, 10);
        this.loadingKeywordsShow = false;
      });
    } catch (err) {
      runInAction(() => {
        this.loadingKeywordsShow = false;
      });
      console.log(err);
    }
  };
  @action fetchSocialMovie = async (id: string) => {
    this.loadingSocialShow = true;
    try {
      const social = await axios.get(
        `https://api.themoviedb.org/3/tv/${id}/external_ids?api_key=${process.env.REACT_APP_API_KEY}`
      );
      // console.log(social.data);
      runInAction(() => {
        this.socialShow = social.data;
        this.loadingSocialShow = false;
      });
    } catch (err) {
      runInAction(() => {
        this.loadingSocialShow = false;
      });
    }
  };
  @action fetchRecommendShows = async (id: string) => {
    this.loadingRecommendShow = true;
    try {
      const recommends = await axios.get(
        `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      );
      // console.log(recommends.data.results);

      runInAction(() => {
        this.loadingRecommendShow = false;
        this.recommendShows = recommends.data.results.splice(0, 4);
      });
    } catch (err) {
      runInAction(() => {
        this.loadingRecommendShow = false;
      });
    }
  };
}
