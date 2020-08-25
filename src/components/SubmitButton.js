import React from "react";
import Button from "@material-ui/core/Button";

const SubmitButton = ({ color, style, disable, textButton }) => {
  return (
    <Button
      variant="contained"
      color={color}
      type="submit"
      fullWidth
      className={style}
      disabled={disable}
    >
      {textButton}
    </Button>
  );
};
export default SubmitButton;
