import { FormActionTypes } from ".";

export const FormActionCreators = {
  changeCurrentStep: (step) => ({
    type: FormActionTypes.CHANGE_CURRENT_STEP,
    payload: step,
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
