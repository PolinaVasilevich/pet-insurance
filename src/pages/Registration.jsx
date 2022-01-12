import React from "react";
import { useDispatch, useSelector } from "react-redux";
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

const Registration = () => {
  const countSteps = 4;
  const currentStep = useSelector((state) => state.currentStep);
  const user = useSelector((state) => state.user);
  const progress = Math.floor((100 / countSteps) * currentStep);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const prevStep = () => {
    if (currentStep !== 1) {
      dispatch(FormActionCreators.changeCurrentStep(currentStep - 1));
      navigate(`/registration/${currentStep - 1}`);
    }
  };

  const closeForm = () => {
    if (!user.username) {
      navigate(RouteNames.HOME);
    } else {
      navigate(RouteNames.USERPAGE);
    }
  };

  return (
    <RegistrationContainer>
      <RegistrationHeader
        style={currentStep === 1 ? { justifyContent: "flex-end" } : {}}
      >
        <ArrowBackIosNewOutlinedIcon
          disabled={currentStep === 1}
          style={currentStep === 1 ? { display: "none" } : {}}
          onClick={prevStep}
        />
        <CloseOutlinedIcon onClick={closeForm} />
      </RegistrationHeader>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{ width: "100%" }}
      />
      <RegistrationContentContainer>
        <h3 style={{ textAlign: "center" }}>
          {currentStep} of {countSteps}
        </h3>
        <Outlet />
      </RegistrationContentContainer>
    </RegistrationContainer>
  );
};

export default Registration;
