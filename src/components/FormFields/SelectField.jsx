import React from "react";
import { useField } from "formik";
import { MenuItem, Select } from "@mui/material";
import {
  MessageError,
  FormField,
  FormInput,
  SelectPlaceholder,
} from "../../styles/StyledComponents";

const SelectField = (props) => {
  const [field, meta] = useField(props);
  const { value: selectedValue } = field;

  console.log("RENDER SELECT");

  return (
    <FormField>
      <Select
        displayEmpty
        {...field}
        value={selectedValue ? selectedValue : ""}
        input={<FormInput />}
        renderValue={
          selectedValue !== ""
            ? null
            : () => <SelectPlaceholder>Select...</SelectPlaceholder>
        }
      >
        {props.data.map((item, index) => (
          <MenuItem key={index} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      {meta.touched && meta.error ? (
        <MessageError>{meta.error}</MessageError>
      ) : null}
    </FormField>
  );
};

export default SelectField;
