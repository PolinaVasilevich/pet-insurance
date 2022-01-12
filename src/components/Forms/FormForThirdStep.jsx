import React from "react";
import { useFormik } from "formik";

import { FormControl, MenuItem, Select } from "@mui/material";

import {
  FormButton,
  FormInput,
  FormBox,
  SelectPlaceholder,
  MessageError,
} from "../../styles/StyledComponents";

const FormForThirdStep = ({
  initialValues,
  validationSchema,
  handleSubmit,
  options,
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
      <FormControl sx={{ width: "500px" }}>
        <Select
          displayEmpty
          name="kind"
          value={formik.values.kind}
          onChange={(e) => formik.setFieldValue("kind", e.target.value)}
          input={<FormInput />}
          error={formik.touched.kind && Boolean(formik.errors.kind)}
          renderValue={
            formik.values.kind !== ""
              ? null
              : () => <SelectPlaceholder>Select...</SelectPlaceholder>
          }
        >
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
        {formik.errors.kind && formik.touched.kind ? (
          <MessageError>{formik.errors.kind}</MessageError>
        ) : null}
      </FormControl>
      <FormButton type="submit" sx={{ marginTop: "1rem" }}>
        Next
      </FormButton>
    </FormBox>
  );
};

export default FormForThirdStep;
