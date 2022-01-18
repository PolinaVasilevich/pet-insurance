export const validateUsername = (value) => {
  let errorMessage;
  if (value === "") {
    errorMessage = "UserName is required";
  } else if (value.length < 3) {
    errorMessage = "Username must be more than 3 characters";
  }
  return errorMessage;
};

export const validatePassword = (value) => {
  let errorMessage;
  if (value === "") {
    errorMessage = "Password is required";
  } else if (value.length < 3) {
    errorMessage = "Password must be more than 3 characters";
  }
  return errorMessage;
};
