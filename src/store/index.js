import { createStore, applyMiddleware } from "redux";
import { save } from "redux-localstorage-simple";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers";

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(save({ states: ["form"], namespace: "DATA" }), thunk)
  )
);
