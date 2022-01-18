import { useField } from "formik";
import React from "react";
import {
  FormField,
  FormInput,
  MessageError,
} from "../../styles/StyledComponents";

const InputField = (props) => {
  const [field, meta] = useField(props);

  return (
    <FormField>
      <FormInput {...field} {...props} />
      {meta.touched && meta.error ? (
        <MessageError>{meta.error}</MessageError>
      ) : null}
    </FormField>
  );
};

export default InputField;
