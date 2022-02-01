import { UserActionTypes } from "../../actions/userActions/actionTypes";

const initialState = {
  user: {},
  loading: true,
  error: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case UserActionTypes.USER_FETCHING:
      return {
        ...state,
        loading: true,
      };

    case UserActionTypes.USER_FETCHED:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    case UserActionTypes.USER_FETCHING_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case UserActionTypes.USER_CREATED_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
}
