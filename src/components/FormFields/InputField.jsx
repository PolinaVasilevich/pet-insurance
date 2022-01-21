import { Field, useField } from "formik";
import React from "react";

const InputField = (props) => {
  const [field, meta] = useField(props);

  return (
    <>
      <Field {...field} {...props} />
      {meta.touched && meta.error ? <p>{meta.error}</p> : null}
    </>
  );
};

export default InputField;
