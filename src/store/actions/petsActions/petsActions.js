import { useHttp } from "../../../hooks/useHttp";
import { PetsActionTypes } from "./types";

export const petsFetching = () => ({ type: PetsActionTypes.PETS_FETCHING });
export const petsFetched = (pets) => ({
  type: PetsActionTypes.PETS_FETCHED,
  payload: pets,
});

export const petsFetchingError = (error) => ({
  type: PetsActionTypes.PETS_FETCHING_ERROR,
  payload: error,
});

export const fetchPets = () => (dispatch) => {
  const { request } = useHttp();
  dispatch(petsFetching());
  request(`${process.env.REACT_APP_BASE_URL}/pets`)
    .then((data) => dispatch(petsFetched(data)))
    .catch((error) => dispatch(petsFetchingError(error)));
};

export const petCreated = (pet) => ({
  type: PetsActionTypes.PET_CREATED,
  payload: pet,
});

export const petCreatedSuccess = (pet) => ({
  type: PetsActionTypes.PET_CREATED_SUCCESS,
  payload: pet,
});

export const petCreatedError = (err) => ({
  type: PetsActionTypes.PET_CREATED_ERROR,
  payload: err,
});

export const createPet = (pet) => (dispatch) => {
  const { request } = useHttp();
  request(`${process.env.REACT_APP_BASE_URL}/pets`, "POST", JSON.stringify(pet))
    .then((res) => dispatch(petCreatedSuccess(res)))
    .catch((error) => dispatch(petCreatedError(error)));
};

export const changePet = (pet) => (dispatch) => {
  const { request } = useHttp();
  request(
    `${process.env.REACT_APP_BASE_URL}/pets/${pet.id}`,
    "PUT",
    JSON.stringify(pet)
  )
    .then((res) => dispatch(petCreatedSuccess(res)))
    .catch((error) => dispatch(petCreatedError(error)));
};

export const petDeleted = (id) => ({
  type: PetsActionTypes.PET_DELETED,
  payload: id,
});
