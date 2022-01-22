import { Field, useField } from "formik";
import React from "react";
import { FormButton } from "../../../styles/FormStyles";

const PickerField = (props) => {
  return <Field {...props} as={PickerButton}></Field>;
};

const PickerButton = (props) => {
  const [field, meta, helper] = useField(props);
  const { setValue } = helper;
  const { value } = props;

  return (
    <FormButton {...props} onClick={() => setValue(value)}>
      {value}
    </FormButton>
  );
};

export default PickerField;
