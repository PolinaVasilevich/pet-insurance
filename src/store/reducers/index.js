import { load } from "redux-localstorage-simple";

const data = load({ namespace: "data" });

const initialState = {
  currentStep: data.currentStep || 1,
  formData: {
    petName: data?.formData?.petName || "",
    petType: data?.formData?.petType || "",
    petKind: data?.formData?.petKind || "",

    username: "",
    password: "",
  },

  user: data?.user || {
    username: "",
    password: "",
    pets: [],
  },
};

export const FormActionTypes = {
  CHANGE_CURRENT_STEP: "CHANGE_CURRENT_STEP",
  ADD_USER: "ADD_USER",
  ADD_PET: "ADD_PET",
  RESET_APP: "RESET_APP",
  ADD_FORM_DATA: "ADD_FORM_DATA",
};

export default function formReducer(state = initialState, action) {
  switch (action.type) {
    case FormActionTypes.CHANGE_CURRENT_STEP:
      return { ...state, currentStep: action.payload };
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
        formData: {
          petName: "",
          petType: "",
          petKind: "",

          username: "",
          password: "",
        },
      };

    case FormActionTypes.ADD_FORM_DATA:
      return { ...state, formData: { ...state.formData, ...action.payload } };
    default:
      return state;
  }
}
