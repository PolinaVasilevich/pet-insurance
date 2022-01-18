import { Field } from "formik";
import React from "react";
import InputField from "../../FormFields/InputField";

import { validateName } from "./validate";

const NamePetForm = ({ formIndex }) => {
  return (
    <Field
      validate={validateName}
      name={`pets[${formIndex}].petName`}
      placeholder="Name*"
      as={InputField}
    />
  );
};

export default NamePetForm;
