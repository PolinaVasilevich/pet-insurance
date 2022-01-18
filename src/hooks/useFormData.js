import { createSelector } from "reselect";

import { useSelector } from "react-redux";

export const useFormData = () => {
  const currentFormIndex = useSelector((state) => state.currentFormIndex);
  const selectorForms = (state) => state.forms;
  const selectCurrentIndex = (state) => state.currentFormIndex;

  const pets = JSON.parse(localStorage.getItem("PETS"))?.pets || [];

  const selectCurrentForm = createSelector(
    [selectorForms, selectCurrentIndex],
    (forms) => {
      return forms.filter((f) => f.id === pets[currentFormIndex]?.id)[0];
    }
  );

  const selectCurrentStep = createSelector(
    [selectCurrentForm, selectorForms, selectCurrentIndex],
    (form) => {
      return form?.currentStep ? form.currentStep : 1;
    }
  );

  return { currentFormIndex, selectCurrentStep, pets, selectCurrentForm };
};
