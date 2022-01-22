import React from "react";
import { useField } from "formik";
import { Select, MenuItem } from "@mui/material";
import { SelectPlaceholder } from "../../styles/StyledComponents";
import { FormErrorMessage } from "./styles";

const SelectField = (props) => {
  const [field, meta] = useField(props);
  const { value: selectedValue } = field;

  const isError = meta.touched && meta.error;

  return (
    <>
      <Select
        displayEmpty
        {...field}
        {...props}
        value={selectedValue ? selectedValue : ""}
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
      {isError ? <FormErrorMessage>{meta.error}</FormErrorMessage> : null}
    </>
  );
};

export default SelectField;
