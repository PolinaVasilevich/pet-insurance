export const validate = (value) => {
  let errorMessage;
  if (value === "") {
    errorMessage = "This field is required";
  }
  return errorMessage;
};
