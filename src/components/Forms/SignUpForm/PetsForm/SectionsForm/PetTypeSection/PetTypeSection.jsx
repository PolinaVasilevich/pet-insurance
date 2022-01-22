import React from "react";
import PetTypeSectionWithButtons from "./PetTypeSectionVariants/PetTypeSectionWithButtons";
import PetTypeSectionWithSelectField from "./PetTypeSectionVariants/PetTypeSectionWithSelectField";

const PetTypeSection = ({ formIndex, variantForm }) => {
  const petTypes = [
    { id: 1, value: "dog", label: "Dog" },
    { id: 2, value: "cat", label: "Cat" },
  ];

  const renderSection = (variantForm) => {
    switch (variantForm) {
      case 0:
        return (
          <PetTypeSectionWithSelectField
            formIndex={formIndex}
            petTypes={petTypes}
            placeholder=""
          />
        );
      case 1:
        return (
          <PetTypeSectionWithButtons
            formIndex={formIndex}
            petTypes={petTypes}
          />
        );
      default:
        return (
          <PetTypeSectionWithSelectField
            formIndex={formIndex}
            petTypes={petTypes}
          />
        );
    }
  };

  return <div>{renderSection(variantForm)}</div>;
};

export default PetTypeSection;
