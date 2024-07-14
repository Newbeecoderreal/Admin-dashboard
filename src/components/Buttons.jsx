import { Button } from "@mui/material";
import React from "react";

function Buttons(props) {
  const { text, variant, onClick } = props;
  return (
    <Button variant={variant} color="secondary" onClick={onClick}>
      {text}
    </Button>
  );
}

export default Buttons;
