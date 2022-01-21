export const validateName = (value) => {
  let errorMessage;
  if (value === "") {
    errorMessage = "Name is required";
  }
  return errorMessage;
};
