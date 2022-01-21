import { Button } from "@mui/material";
import { Form, Formik } from "formik";
import { PersistFormikValues } from "formik-persist-values";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import {
  FormButton,
  FormWrapper,
  OutlinedInputField,
} from "../../../../styles/FormStyles";
import InputField from "../../../FormFields/InputField";

import { validateUsername, validateEmail } from "./validate";

const UserInfoForm = ({ handleSubmit }) => {
  const initialValues = {
    id: uuidv4(),
    username: "",
    email: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => handleSubmit(values)}
    >
      {() => (
        <FormWrapper>
          <InputField
            validate={validateUsername}
            name="username"
            placeholder="Username*"
            as={OutlinedInputField}
          />

          <InputField
            validate={validateEmail}
            name="email"
            type="email"
            placeholder="Email*"
            as={OutlinedInputField}
          />

          <FormButton type="submit">Next</FormButton>
          <PersistFormikValues name={"USER"} />
        </FormWrapper>
      )}
    </Formik>
  );
};

export default UserInfoForm;
