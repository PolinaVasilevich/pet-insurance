import React from "react";
import { v4 as uuidv4 } from "uuid";

import { Button } from "@mui/material";
import { Form, Formik } from "formik";

import PetArray from "./PetArray";

const PetsForm = ({ handleSubmit, currentStep, currentFormIndex }) => {
  const initialValues = {
    pets: [
      {
        id: uuidv4(),
        petName: "",
        petBreed: "",
      },
    ],
  };

  return (
    <Formik
      initialValues={{ ...initialValues }}
      onSubmit={(values) => handleSubmit(values)}
    >
      {({ values }) => (
        <Form>
          <PetArray
            values={values}
            currentStep={currentStep}
            currentFormIndex={currentFormIndex}
          />
          <Button type="submit">Next</Button>
        </Form>
      )}
    </Formik>
  );
};

export default PetsForm;
