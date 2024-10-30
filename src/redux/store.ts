import { createStore } from "redux";
import { rootReducer } from "./UserReducer/root-reducer";

export const store = createStore(rootReducer);
