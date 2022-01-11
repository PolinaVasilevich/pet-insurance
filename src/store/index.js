import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { save } from "redux-localstorage-simple";

export const store = createStore(
  rootReducer,
  applyMiddleware(save({ namespace: "data" }))
);
