import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import LinearProgress from "@mui/material/LinearProgress";
import {
  RegistrationContentContainer,
  RegistrationHeader,
  RegistrationContainer,
} from "../styles/StyledComponents";

import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { RouteNames } from "../router";
import { FormActionCreators } from "../store/reducers/action-creators";

const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const countSteps = 4;
  const { currentStep } = useSelector((state) => state.signUpForm);
  const user = useSelector((state) => state.user);

  const progress = Math.floor((100 / countSteps) * currentStep);

  const prevStep = () => {
    if (currentStep !== 1) {
      dispatch(FormActionCreators.changeCurrentStep(currentStep - 1));
      navigate(`/registration/${currentStep - 1}`);
    }
  };

  const closeForm = () => {
    if (!user.username) navigate(RouteNames.HOME);
    else navigate(RouteNames.CHECKOUT);
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
