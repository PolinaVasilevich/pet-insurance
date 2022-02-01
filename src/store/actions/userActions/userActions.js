import { useHttp } from "../../../hooks/useHttp";
import { UserActionTypes } from "./actionTypes";

const userFetching = () => ({ type: UserActionTypes.USER_FETCHING });
const userFetched = (user) => ({
  type: UserActionTypes.USER_FETCHED,
  payload: user,
});
const userFetchingError = (error) => ({
  type: UserActionTypes.USER_FETCHING_ERROR,
  payload: error,
});

export const fetchUser = () => (dispatch) => {
  const { request } = useHttp();
  dispatch(userFetching());
  request(`${process.env.REACT_APP_BASE_URL}/user`)
    .then((data) => dispatch(userFetched(data)))
    .catch((error) => dispatch(userFetchingError(error)));
};

export const userCreated = (user) => ({
  type: UserActionTypes.USER_CREATED,
  payload: user,
});

export const userCreatedSuccess = (user) => ({
  type: UserActionTypes.USER_CREATED_SUCCESS,
  payload: user,
});

export const userCreatedError = (err) => ({
  type: UserActionTypes.USER_CREATED_ERROR,
  payload: err,
});

export const createUser = (user) => (dispatch) => {
  const { request } = useHttp();
  request(
    `${process.env.REACT_APP_BASE_URL}/user`,
    "POST",
    JSON.stringify(user)
  )
    .then((res) => dispatch(userCreatedSuccess(res)))
    .catch((error) => dispatch(userCreatedError(error)));
};
