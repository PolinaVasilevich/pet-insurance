import React from "react";

import { Button } from "@mui/material";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { FormActionCreators } from "../store/reducers/action-creators";

const Checkout = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleClick = (formId) => {
    // const formIndex = pets.findIndex((p) => p.id === formId);
    // dispatch(FormActionCreators.changeCurrentFormIndex(formIndex));
    // dispatch(FormActionCreators.changeCurrentStep(1));
    // navigation("/registration/1");
  };

  return (
    <div>
      {/* {pets.map((p) => (
        <Button
          sx={{ margin: "1rem" }}
          key={p.id}
          variant="outlined"
          color="inherit"
          onClick={() => handleClick(p.id)}
        >
          {p.petName}
        </Button>
      ))} */}
      CHECKOUT
    </div>
  );
};

export default Checkout;
