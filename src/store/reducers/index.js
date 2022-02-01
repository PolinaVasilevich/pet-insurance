import { combineReducers } from "redux";
import petsReducer from "./petsReducers/petsReducers";
import formReducer from "./formReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  pets: petsReducer,
  form: formReducer,
  user: userReducer,
});

export default rootReducer;
