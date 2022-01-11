import { load } from "redux-localstorage-simple";

const data = load({ namespace: "data" });

const { name, type, kind } = data.pet;

const initialState = {
  currentStep: data.currentStep || 1,
  pet: {
    name: name || "",
    type: type || "",
    kind: kind || "",
  },
  user: {
    username: "",
    password: "",
  },
};

export const FormActionTypes = {
  CHANGE_CURRENT_STEP: "CHANGE_CURRENT_STEP",
  ADD_NAME_PET: "ADD_NAME_PET",
  ADD_TYPE_PET: "ADD_TYPE_PET",
  ADD_KIND_PET: "ADD_KIND_PET",
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
    default:
      return state;
  }
}
