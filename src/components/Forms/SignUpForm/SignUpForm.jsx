import React from "react";
import { LAST_STEP_PET_FORM } from "../../../utils/consts";
import PetsForm from "./PetsForm/PetsForm";
import UserInfoForm from "./UserInfoForm/UserInfoForm";

const SignUpForm = ({ handleSubmit, currentFormIndex, currentStep }) => {
  return (
    <div>
      {currentStep < LAST_STEP_PET_FORM ? (
        <PetsForm
          currentFormIndex={currentFormIndex}
          currentStep={currentStep}
          handleSubmit={handleSubmit}
        />
      ) : (
        <UserInfoForm handleSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default SignUpForm;
