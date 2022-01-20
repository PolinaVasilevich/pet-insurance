import { Field } from "formik";
import React from "react";
import InputField from "../../FormFields/InputField";

import { validateName } from "./validate";

const NamePetForm = ({ formIndex }) => {
  console.log("RENDER NAMEPETFORM");

  return (
    <Field
      validate={validateName}
      name={`pets[${formIndex}].petName`}
      placeholder="Name*"
      as={InputField}
    />
  );
};

export default React.memo(
  NamePetForm,
  (prevProps, nextProps) => prevProps.formIndex === nextProps.formIndex
);
