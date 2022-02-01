import React from "react";

import { Formik } from "formik";

import PetArray from "./PetArray";
import { FormButton, FormWrapper } from "../../../../styles/FormStyles";
import { useSelector } from "react-redux";
import { PET_TYPE_STEP } from "../../../../utils/consts";

import { useGoogleOptimize } from "../../../../hooks/useGoogleOptimize";

const PetsForm = ({ handleSubmit, currentStep, currentFormIndex }) => {
  const pets = useSelector((state) => state.form.pets);
  const variantForm = useGoogleOptimize(process.env.REACT_APP_EXPERIMENT_ID);

  const initialValues = {
    pets,
  };

  return (
    <Formik
      initialValues={{ ...initialValues }}
      onSubmit={(values) => handleSubmit(values)}
    >
      {({ values }) => (
        <FormWrapper>
          <PetArray
            values={values}
            currentStep={currentStep}
            currentFormIndex={currentFormIndex}
            variantForm={variantForm}
          />

          {!(currentStep === PET_TYPE_STEP && variantForm === 1) ? (
            <FormButton type="submit">Next</FormButton>
          ) : null}
        </FormWrapper>
      )}
    </Formik>
  );
};

export default PetsForm;
