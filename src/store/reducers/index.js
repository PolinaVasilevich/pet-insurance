import { load } from "redux-localstorage-simple";

import { FormActionTypes } from "./types";

const DATA = load({ namespace: "DATA" });

const initialState = {
  signUpForm: DATA.signUpForm || { currentStep: 1, currentFormIndex: 0 },

  user: DATA.user || {
    id: "",
    username: "",
    password: "",
  },

  pets: DATA.pets || {
    id: "",
    petName: "",
    petBreed: "",
  },
};

export default function formReducer(state = initialState, action) {
  switch (action.type) {
    case FormActionTypes.CHANGE_FORM_DATA:
      const allForms = state.forms.filter((f) => f.id !== action.payload.id);

      return { ...state, forms: [...allForms, action.payload] };

    case FormActionTypes.CHANGE_CURRENT_FORM_INDEX:
      return {
        ...state,
        signUpForm: { ...state.signUpForm, currentFormIndex: action.payload },
      };

    case FormActionTypes.ADD_PET:
      return { ...state, pets: [...state.pets, { ...action.payload }] };

    case FormActionTypes.ADD_USER:
      return { ...state, user: action.payload };

    case FormActionTypes.CHANGE_CURRENT_STEP:
      return {
        ...state,
        signUpForm: { ...state.signUpForm, currentStep: action.payload },
      };

    default:
      return state;
  }
}
