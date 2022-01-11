import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { RouteNames } from "../router";
import { FormActionCreators } from "../store/reducers/action-creators";

const Registration = () => {
  const countSteps = 4;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentStep = useSelector((state) => state.currentStep);

  const prevStep = () => {
    if (currentStep !== 1) {
      dispatch(FormActionCreators.changeCurrentStep(currentStep - 1));
      navigate(`/registration/${currentStep - 1}`);
    }
  };

  return (
    <div className="registration">
      <div className="registration__header">
        <button disabled={currentStep === 1} onClick={prevStep}>
          Prev
        </button>
        <h3 style={{ textAlign: "center" }}>
          {currentStep} of {countSteps}
        </h3>
        <button></button>
      </div>
      <div className="registration__content">
        <Outlet />
      </div>
    </div>
  );
};

export default Registration;
