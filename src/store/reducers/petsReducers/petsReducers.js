import { PetsActionTypes } from "../../actions/petsActions/types";

const initialState = {
  pets: [],
  loading: true,
  error: null,
};

export default function petsReducer(state = initialState, action) {
  switch (action.type) {
    case PetsActionTypes.PETS_FETCHING:
      return {
        ...state,
        loading: true,
      };

    case PetsActionTypes.PETS_FETCHED:
      return {
        ...state,
        pets: action.payload,
        loading: false,
      };

    case PetsActionTypes.PETS_FETCHING_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case PetsActionTypes.PET_CREATED_SUCCESS:
      return {
        ...state,
        pets: action.payload,
      };

    case PetsActionTypes.PET_DELETED:
      return {
        ...state,
        pets: state.pets.filter((p) => p !== action.payload),
      };
    default:
      return state;
  }
}
