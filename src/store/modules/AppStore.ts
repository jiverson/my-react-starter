import { action, computed, observable } from "mobx";

export interface State {
  increment: () => void;
  decrement: () => void;
  counter: number;
  count: number;
}

export default class AppStore implements State {
  @observable count = 0;

  @action.bound
  increment() {
    this.count++;
  }

  @action.bound
  decrement() {
    this.count--;
  }

  @computed
  get counter() {
    return this.count;
  }
}

// export const AppStoreContext = createContext<State>(new AppStore());
