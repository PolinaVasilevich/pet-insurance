import { FormActionTypes } from "./types";

export const FormActionCreators = {
  changeFormData: (formData) => ({
    type: FormActionTypes.CHANGE_FORM_DATA,
    payload: formData,
  }),

  changeCurrentFormIndex: (formIndex) => ({
    type: FormActionTypes.CHANGE_CURRENT_FORM_INDEX,
    payload: formIndex,
  }),

  changePets: (pets) => ({
    type: FormActionTypes.CHANGE_PETS,
    payload: pets,
  }),

  addUser: (user) => ({
    type: FormActionTypes.ADD_USER,
    payload: user,
  }),
};
