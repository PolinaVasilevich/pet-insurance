import React from "react";
import { Formik } from "formik";

import Button from "@mui/material/Button";
import { Box, FormControl, InputLabel, OutlinedInput } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../router";
import { useDispatch } from "react-redux";
import { FormActionCreators } from "../store/reducers/action-creators";

const FirstStep = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div>
      <h1>What Is Your Pet's Name?</h1>
      <Formik
        initialValues={{ name: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.email = "Required";
          }
          return errors;
        }}
        onSubmit={(values) => {
          dispatch(FormActionCreators.changeCurrentStep(2));
          dispatch(FormActionCreators.addNamePet(values.name));

          navigate(RouteNames.REGISTRATION + "/2");
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Box
            component="form"
            sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="outlined-adornment-name">Name</InputLabel>
              <OutlinedInput
                name="name"
                label="Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
            </FormControl>
            <Button type="submit" variant="contained" disabled={!values.name}>
              Next
            </Button>
          </Box>
        )}
      </Formik>
    </div>
  );
};

export default FirstStep;
