import React from "react";
import InputField from "../FormFields/InputField";

const NamePetForm = () => {
  return (
    <>
      <h1>What Is Your Pet's Name?</h1>
      <InputField id="petName" name="petName" placeholder="Name*" />
    </>
  );
};

export default NamePetForm;
