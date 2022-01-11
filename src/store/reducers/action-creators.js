import { FormActionTypes } from ".";

export const FormActionCreators = {
  changeCurrentStep: (step) => ({
    type: FormActionTypes.CHANGE_CURRENT_STEP,
    payload: step,
  }),
  addNamePet: (name) => ({
    type: FormActionTypes.ADD_NAME_PET,
    payload: name,
  }),
  addTypePet: (type) => ({
    type: FormActionTypes.ADD_TYPE_PET,
    payload: type,
  }),
  addKindPet: (kind) => ({
    type: FormActionTypes.ADD_KIND_PET,
    payload: kind,
  }),
};
