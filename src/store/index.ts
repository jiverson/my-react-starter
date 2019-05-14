import { createContext } from "react";
import AppStore, { State as AppState } from "./modules/AppStore";

export const AppStoreContext = createContext<AppState>(new AppStore());
