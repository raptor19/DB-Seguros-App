import React from "react";
import Button from '@material-ui/core/Button';

const SubmitButton = (props) => {
  return (
    <Button
      variant="contained"
      color={props.color}
      type="submit"
      fullWidth
      className={props.style}
      disabled={props.disable}
    >
      Submit
    </Button>
  );
};
export default SubmitButton;
