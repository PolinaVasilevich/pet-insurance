import { useFormik } from "formik";
import React from "react";
import {
  FormBox,
  FormButton,
  FormField,
  FormInput,
  MessageError,
} from "../../styles/StyledComponents";

const FormForFourthStep = ({
  initialValues,
  validationSchema,
  handleSubmit,
}) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  return (
    <FormBox onSubmit={formik.handleSubmit}>
      <FormField>
        <FormInput
          fullWidth
          id="username"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.touched.username && Boolean(formik.errors.username)}
          placeholder="Username*"
        />
        {formik.errors.username && formik.touched.username ? (
          <MessageError>{formik.errors.username}</MessageError>
        ) : null}
      </FormField>
      <FormField>
        <FormInput
          fullWidth
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          placeholder="Password*"
          type="password"
        />
        {formik.errors.password && formik.touched.password ? (
          <MessageError>{formik.errors.password}</MessageError>
        ) : null}
      </FormField>

      <FormButton type="submit" sx={{ marginTop: "1rem" }}>
        See Results
      </FormButton>
    </FormBox>
  );
};

export default FormForFourthStep;
