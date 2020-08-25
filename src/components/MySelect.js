import React from "react";
import { Select, InputLabel } from "@material-ui/core";
import { useField } from "formik";

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <InputLabel htmlFor={props.id || props.name}>{label}</InputLabel>
      <Select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div style={{ color: "red" }}>{meta.error}</div>
      ) : null}
    </>
  );
};

export default MySelect;
