import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Formik } from "formik";

import PetArray from "./PetArray";
import { FormButton, FormWrapper } from "../../../../styles/FormStyles";
import { useSelector } from "react-redux";

const PetsForm = ({ handleSubmit, currentStep, currentFormIndex }) => {
  const pets = useSelector((state) => state.pets);

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
          />

          <FormButton type="submit">Next</FormButton>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default PetsForm;
