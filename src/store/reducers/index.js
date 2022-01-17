import { load } from "redux-localstorage-simple";

import { FormActionTypes } from "./types";

const DATA = load({ namespace: "DATA" });

const initialState = {
  currentStep: DATA.currentStep || 1,
  currentFormIndex: DATA.currentFormIndex || 0,

  forms: DATA.forms || [],

  user: DATA?.user || {
    username: "",
    password: "",
  },
  pets: JSON.parse(localStorage.getItem("PETS"))?.pets || [],
};

export default function formReducer(state = initialState, action) {
  switch (action.type) {
    case FormActionTypes.CHANGE_FORM_DATA:
      const allForms = state.forms.filter((f) => f.id !== action.payload.id);

      return { ...state, forms: [...allForms, action.payload] };

    case FormActionTypes.CHANGE_CURRENT_FORM_INDEX:
      return { ...state, currentFormIndex: action.payload };

    case FormActionTypes.CHANGE_PETS:
      return { ...state, pets: action.payload };

    case FormActionTypes.CHANGE_CURRENT_STEP:
      return { ...state, currentStep: action.payload };

    case FormActionTypes.CHANGE_CURRENT_FORM_ID:
      return { ...state, currentFormId: action.payload };

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
