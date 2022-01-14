import React from "react";

import InputField from "../FormFields/InputField";

const UserInfoForm = () => {
  return (
    <>
      <div>
        <h1>Tell Us About The Human</h1>
        <p>
          Someone's got to pay the bills. Share your name and email to get your
          personalized recommendation!
        </p>
      </div>
      <InputField id="username" name="username" placeholder="Username*" />
      <InputField
        id="password"
        name="password"
        type="password"
        placeholder="Password*"
      />
    </>
  );
};

export default UserInfoForm;
