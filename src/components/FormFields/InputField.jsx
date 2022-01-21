import React from "react";
import { Field, useField } from "formik";

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
      {meta.touched && meta.error ? <p>{meta.error}</p> : null}
    </>
  );
};

export default InputField;
