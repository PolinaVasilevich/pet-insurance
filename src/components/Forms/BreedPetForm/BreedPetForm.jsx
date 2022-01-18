import { Field } from "formik";
import React from "react";
import SelectField from "../../FormFields/SelectField";

import { validate } from "./validate";

const BreedPetForm = ({ formIndex, options }) => {
  return (
    <Field
      validate={validate}
      data={options}
      name={`pets[${formIndex}].petKind`}
      as={SelectField}
    />
  );
};

export default BreedPetForm;
