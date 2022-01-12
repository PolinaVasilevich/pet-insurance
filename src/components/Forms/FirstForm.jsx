import React from "react";
import { useFormik } from "formik";

import {
  FormBox,
  FormButton,
  FormInput,
  MessageError,
} from "../../styles/StyledComponents";

const FirstForm = ({ initialValues, validationSchema, handleSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
  return (
    <FormBox onSubmit={formik.handleSubmit}>
      <FormInput
        fullWidth
        id="name"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        placeholder="Name*"
      />
      {formik.errors.name && formik.touched.name ? (
        <MessageError>{formik.errors.name}</MessageError>
      ) : null}
      <FormButton type="submit" sx={{ marginTop: "1rem" }}>
        Next
      </FormButton>
    </FormBox>
  );
};

export default FirstForm;
