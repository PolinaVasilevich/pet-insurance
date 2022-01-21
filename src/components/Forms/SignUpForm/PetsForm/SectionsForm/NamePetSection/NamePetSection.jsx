import React from "react";
import InputField from "../../../../../FormFields/InputField";

import { validateName } from "./validate";

const NamePetSection = ({ formIndex }) => {
  console.log("RENDER NAME_PET_SECTION");

  return (
    <InputField
      validate={validateName}
      name={`pets[${formIndex}].petName`}
      placeholder="Name*"
    />
  );
};

export default NamePetSection;
