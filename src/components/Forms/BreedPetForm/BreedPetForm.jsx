import { Field } from "formik";
import React from "react";
import SelectField from "../../FormFields/SelectField";

import { validate } from "./validate";

const BreedPetForm = ({ formIndex, options }) => {
  console.log("RENDER BREEDPETFORM");
  return (
    <Field
      validate={validate}
      data={options}
      name={`pets[${formIndex}].petKind`}
      as={SelectField}
    />
  );
};

export default React.memo(
  BreedPetForm,
  (prevProps, nextProps) => prevProps.formIndex === nextProps.formIndex
);
