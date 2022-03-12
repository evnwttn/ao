import React from "react";
import { Button } from "@mui/material";

export const ModalButton = ({ text, handleOpen, prompt }) => {
  return (
    <>
      <Button
        disableRipple
        key={text}
        onClick={() => handleOpen(text) || console.log(text)}
        variant="text"
        color={
          text === "New" ? "primary" : text === "Load" ? "secondary" : "inherit"
        }
      >
        {text}
      </Button>
    </>
  );
};
