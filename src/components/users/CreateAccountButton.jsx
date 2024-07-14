import { Button } from "@mui/material";
import React, { useState } from "react";
import Modals from "../Modals";
import { useLocation } from "react-router-dom";

function CreateAccountButton({ content, open, setOpen }) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const location = useLocation();

  const path = location.pathname;
  const parts = path.split("/");
  const result = parts[2]; // "master"

  return (
    <>
      <Button variant="contained" color="secondary" onClick={handleOpen}>
        CREATE {result}
      </Button>
      <Modals
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        content={content}
        size="md"
        title={`CREATE ${result.toUpperCase()} `}
      />
    </>
  );
}

export default CreateAccountButton;
