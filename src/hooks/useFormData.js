// import { createSelector } from "reselect";
import { useMemo } from "react";
import { useSelector } from "react-redux";

export const useFormData = () => {
  const currentFormIndex = useSelector((state) => state.currentFormIndex);
  //   const selectorForms = (state) => state.forms;

  const forms = useSelector((state) => state.forms);

  const pets = JSON.parse(localStorage.getItem("PETS"))?.pets || [];

  //   const currentForm = createSelector([selectorForms], (forms) => {
  //     return
  //   });

  const currentForm = useMemo(() => {
    return forms.filter((f) => f.id === pets[currentFormIndex]?.id)[0];
  }, [currentFormIndex, forms]);

  const currentStep = useMemo(() => {
    return currentForm?.currentStep ? currentForm.currentStep : 1;
  }, [currentForm]);

  return { currentFormIndex, currentStep, pets, currentForm };
};
