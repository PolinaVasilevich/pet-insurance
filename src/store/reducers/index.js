import { load } from "redux-localstorage-simple";
import { v4 as uuidv4 } from "uuid";

import { FormActionTypes } from "./types";

const DATA = load({ namespace: "DATA" });

const initialState = {
  signUpForm: DATA.signUpForm || { currentStep: 1, currentFormIndex: 0 },

  user: DATA.user || {
    id: uuidv4(),
    username: "",
    password: "",
  },

  pets: DATA?.pets || [
    {
      id: uuidv4(),
      petName: "",
      petType: "",
      petBreed: "",
    },
  ],
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
      const allPets = [...state.pets].filter((p) => p.id !== action.payload.id);
      return { ...state, pets: [...allPets, action.payload] };

    case FormActionTypes.ADD_USER:
      return { ...state, user: action.payload };

    case FormActionTypes.CHANGE_CURRENT_STEP:
      return {
        ...state,
        signUpForm: { ...state.signUpForm, currentStep: action.payload },
      };

    case FormActionTypes.REMOVE_PET:
      const newPets = state.pets.filter((p) => p.id !== action.payload);
      return {
        ...state,
        pets: [...newPets],
      };

    default:
      return state;
  }
}
