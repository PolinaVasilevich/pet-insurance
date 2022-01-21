import { Button, Box, OutlinedInput } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Field, Form } from "formik";
import styledComponents from "styled-components";

export const RegistrationContainer = styledComponents.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  color: #fff;

`;

export const RegistrationHeader = styledComponents.div`
  padding: 2rem 1.5rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #808080;

  & svg {
      cursor: pointer;
     font-size: 1.7rem;
  }
`;

export const RegistrationContentContainer = styled(Box)`
  padding: 2.5rem;
  min-height: 100vh;
  background-color: #4ca2d1;
  text-align: center;
`;

export const FormInput = styled(OutlinedInput)`
  width: 100%;

  background: #fff;
  color: #014476;
  outline: none;
`;

export const FormField = styledComponents.div`
  margin-bottom: 1rem;
  width: 500px;
`;

export const ButtonsBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    margin-bottom: 1rem;
  }
`;

export const FormFormik = styledComponents(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 500px;
  margin: 0 auto;
`;

export const MessageError = styledComponents.span`
  margin-top: 0.5rem;
  color: red;
  font-weight: bold;
`;

export const SelectPlaceholder = styledComponents.span`
  color: #808080;
`;

export const FieldButton = styledComponents(Field).attrs({
  type: "input",
})`  
  width: 200px;
  height: 45px;

  margin-bottom: 1rem;
  border-radius: 1rem;
  background-color: #fff;
  border: none;
  outline: none;

  color: #01528d;
  font-weight: bolder;

  text-align: center;
  
  cursor: pointer;
  caret-color: transparent;


  &:hover {
    background-color: #01528d;
    color: #fff;
  }

`;
