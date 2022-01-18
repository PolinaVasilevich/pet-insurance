import { Field } from "formik";
import React from "react";
import InputField from "../../FormFields/InputField";

import { validateUsername, validatePassword } from "./validate";

const UserInfoForm = ({ formIndex }) => {
  return (
    <>
      <Field
        validate={validateUsername}
        name={`pets[${formIndex}].username`}
        placeholder="Username*"
        as={InputField}
      />
      <Field
        validate={validatePassword}
        name={`pets[${formIndex}].password`}
        type="password"
        placeholder="Password*"
        as={InputField}
      />
    </>
  );
};

export default UserInfoForm;
