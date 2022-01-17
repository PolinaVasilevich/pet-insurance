import React from "react";

import SelectField from "../FormFields/SelectField";

const KindPetForm = React.memo(({ petData, formIndex }) => {
  const kinds = [
    { value: "Mixed Breed", label: "Mixed Breed" },
    { value: "Abyssinian", label: "Abyssinian" },
    { value: "Alley Cat", label: "Alley Cat" },
    { value: "American Curl", label: "American Curl" },
    { value: "Mixed Breed", label: "Mixed Breed" },
    { value: "Abyssinian", label: "Abyssinian" },
    { value: "Alley Cat", label: "Alley Cat" },
    { value: "American Curl", label: "American Curl" },
  ];

  return (
    <div>
      <div>
        <h1>
          What Kind Of {petData?.petType?.toUpperCase()} Is {petData?.petName}?
        </h1>
        <p>Different breeds have different needs.</p>
      </div>
      <SelectField data={kinds} name={`pets[${formIndex}].petKind`} />
    </div>
  );
});

export default KindPetForm;
