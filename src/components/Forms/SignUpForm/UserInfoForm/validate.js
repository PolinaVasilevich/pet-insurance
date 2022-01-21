export const validateUsername = (value) => {
  let errorMessage;

  if (value === "") {
    errorMessage = "UserName is required";
  } else if (value.length < 3) {
    errorMessage = "Username must be more than 3 characters";
  }

  return errorMessage;
};

export const validateEmail = (value) => {
  let errorMessage;
  if (value === "") {
    errorMessage = "Email is required";
  }
  return errorMessage;
};
