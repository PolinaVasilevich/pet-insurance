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

  addPet: (pets) => ({
    type: FormActionTypes.ADD_PET,
    payload: pets,
  }),

  addUser: (user) => ({
    type: FormActionTypes.ADD_USER,
    payload: user,
  }),

  changeCurrentStep: (step) => ({
    type: FormActionTypes.CHANGE_CURRENT_STEP,
    payload: step,
  }),

  removePet: (petId) => ({
    type: FormActionTypes.REMOVE_PET,
    payload: petId,
  }),
};
