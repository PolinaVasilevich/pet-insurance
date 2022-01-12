import { load } from "redux-localstorage-simple";

const data = load({ namespace: "data" });

const initialState = {
  currentStep: data.currentStep || 1,
  pet: {
    name: data?.pet?.name || "",
    type: data?.pet?.type || "",
    kind: data?.pet?.kind || "",
  },
  user: data?.user || {
    username: "",
    password: "",
    pets: [],
  },
};

export const FormActionTypes = {
  CHANGE_CURRENT_STEP: "CHANGE_CURRENT_STEP",
  ADD_NAME_PET: "ADD_NAME_PET",
  ADD_TYPE_PET: "ADD_TYPE_PET",
  ADD_KIND_PET: "ADD_KIND_PET",
  ADD_USER: "ADD_USER",
  ADD_PET: "ADD_PET",
  RESET_APP: "RESET_APP",
};

export default function formReducer(state = initialState, action) {
  switch (action.type) {
    case FormActionTypes.CHANGE_CURRENT_STEP:
      return { ...state, currentStep: action.payload };
    case FormActionTypes.ADD_NAME_PET:
      return { ...state, pet: { ...state.pet, name: action.payload } };
    case FormActionTypes.ADD_TYPE_PET:
      return { ...state, pet: { ...state.pet, type: action.payload } };
    case FormActionTypes.ADD_KIND_PET:
      return { ...state, pet: { ...state.pet, kind: action.payload } };
    case FormActionTypes.ADD_USER:
      return { ...state, user: action.payload };
    case FormActionTypes.ADD_PET:
      let pets = [];
      if (state.user.pets) {
        pets = [...state.user.pets, action.payload];
      } else {
        pets.push(action.payload);
      }
      return {
        ...state,
        user: { ...state.user, pets },
      };
    case FormActionTypes.RESET_APP:
      return {
        ...state,
        currentStep: 1,
        pet: { name: "", kind: "", type: "" },
      };
    default:
      return state;
  }
}
