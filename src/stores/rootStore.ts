import { configure } from "mobx";
import { createContext } from "react";
import MoviesStore from "./moviesStore";
import ShowsStore from "./showsStore";

configure({ enforceActions: "always" });

export class RootStore {
  commonStore: MoviesStore;
  showsStore: ShowsStore;

  constructor() {
    this.commonStore = new MoviesStore(this);
    this.showsStore = new ShowsStore(this);
  }
}

export const RootStoreContext = createContext(new RootStore());
