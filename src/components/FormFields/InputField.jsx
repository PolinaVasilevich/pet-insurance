import React from "react";
import { Field, useField } from "formik";
import { FormErrorMessage } from "./styles";

const InputField = (props) => {
  const [field, meta] = useField(props);

  // const renderHelperText = () => {
  //   if (meta.touched && meta.error) {
  //     return meta.error;
  //   }
  // };

  return (
    <>
      <Field {...field} {...props} />
      {meta.touched && meta.error ? (
        <FormErrorMessage>{meta.error}</FormErrorMessage>
      ) : null}
    </>
  );
};

export default InputField;
