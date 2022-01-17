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

  changeCurrentStep: (step) => ({
    type: FormActionTypes.CHANGE_CURRENT_STEP,
    payload: step,
  }),

  changeCurrentFormId: (formId) => ({
    type: FormActionTypes.CHANGE_CURRENT_FORM_ID,
    payload: formId,
  }),

  addUser: (user) => ({
    type: FormActionTypes.ADD_USER,
    payload: user,
  }),

  addPet: (pet) => ({
    type: FormActionTypes.ADD_PET,
    payload: pet,
  }),
  resetApp: () => ({
    type: FormActionTypes.RESET_APP,
  }),

  addFormData: (formData) => ({
    type: FormActionTypes.ADD_FORM_DATA,
    payload: formData,
  }),
};
