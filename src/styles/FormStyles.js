import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { Form } from "formik";
import { Box, OutlinedInput } from "@material-ui/core";

export const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 500px;
  margin: 0 auto;
`;

export const FormButton = styled(Button)`
  margin-top: 1rem;
  width: 200px;
  height: 45px;
  border-radius: 1rem;
  background-color: #fff;
  color: #01528d;
  font-weight: bolder;
  cursor: pointer;

  &:hover {
    background-color: #01528d;
    color: #fff;
  }

  &[disabled] {
    background-color: #fff;
    color: #9dcbde;
  }
`;

export const OutlinedInputField = styled(OutlinedInput)`
  width: 100%;

  background: #fff;
  color: #014476;
  outline: none;

  margin-bottom: 1rem;
`;

export const FormSectionWrapper = styled(Box)`
  width: 100%;
`;
