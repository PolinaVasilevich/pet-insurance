import React from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

import { FormActionCreators } from "../store/reducers/action-creators";

import LinearProgress from "@mui/material/LinearProgress";
import {
  RegistrationContentContainer,
  RegistrationHeader,
  RegistrationContainer,
} from "../styles/StyledComponents";

import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { RouteNames } from "../router";
import { useFormData } from "../hooks/useFormData";

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const countSteps = 4;
  const { currentStep, currentForm } = useFormData();

  const progress = Math.floor((100 / countSteps) * currentStep);

  const prevStep = () => {
    if (currentStep !== 1) {
      dispatch(
        FormActionCreators.changeFormData({
          ...currentForm,
          currentStep: currentStep - 1,
        })
      );

      navigate(`/registration/${currentStep - 1}`);
    }
  };

  const closeForm = () => {
    navigate(RouteNames.HOME);
  };

  return (
    <RegistrationContainer>
      <RegistrationHeader
        style={
          currentStep === 1 || currentStep === 4
            ? { justifyContent: "flex-end" }
            : {}
        }
      >
        <ArrowBackIosNewOutlinedIcon
          disabled={currentStep === 1}
          style={
            currentStep === 1 || currentStep === 4 ? { display: "none" } : {}
          }
          onClick={prevStep}
        />
        <CloseOutlinedIcon onClick={closeForm} />
      </RegistrationHeader>
      {currentStep !== 4 ? (
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{ width: "100%" }}
        />
      ) : null}
      <RegistrationContentContainer>
        {currentStep !== 4 ? (
          <h3 style={{ textAlign: "center" }}>
            {currentStep} of {countSteps}
          </h3>
        ) : null}
        <Outlet />
      </RegistrationContentContainer>
    </RegistrationContainer>
  );
};

export default Registration;
