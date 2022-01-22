import React from "react";
import { OutlinedInputField } from "../../../../../../../styles/FormStyles";
import SelectField from "../../../../../../FormFields/SelectField";
import { validate } from "./validate";

const PetTypeSectionWithSelectField = ({ petTypes, formIndex }) => {
  return (
    <SelectField
      validate={validate}
      data={petTypes}
      name={`pets[${formIndex}].petType`}
      input={<OutlinedInputField />}
    />
  );
};

export default PetTypeSectionWithSelectField;
