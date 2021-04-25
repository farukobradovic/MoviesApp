import { configure } from "mobx";
import { createContext } from "react";
import MoviesStore from "./moviesStore";

configure({ enforceActions: "always" });

export class RootStore {
  commonStore: MoviesStore;

  constructor() {
    this.commonStore = new MoviesStore(this);
  }
}

export const RootStoreContext = createContext(new RootStore());
