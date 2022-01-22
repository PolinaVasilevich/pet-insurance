import React from "react";
import { ButtonsBox } from "../../../../../../../styles/StyledComponents";
import PickerField from "../../../../../../FormFields/QuizFields/PickerField";

const PetTypeSectionWithButtons = ({ petTypes, formIndex }) => {
  return (
    <ButtonsBox>
      {petTypes.map((t) => (
        <PickerField
          key={t.id}
          name={`pets[${formIndex}].petType`}
          value={t.value}
          as={PickerField}
          type="submit"
        />
      ))}
    </ButtonsBox>
  );
};

export default PetTypeSectionWithButtons;
