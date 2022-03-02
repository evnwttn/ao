import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import { aoWhite } from "../../assets/theme";

export const NewModal = () => {
  const [sessionTitle, setSessionTitle] = useState("");
  const handleChange = (titleForm) => {
    setSessionTitle(titleForm.target.value);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <TextField
          required
          label="New Session"
          variant="standard"
          size="small"
          color="divider"
          helperText="Please enter a session title to continue"
          margin="normal"
          value={sessionTitle}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <AddCircleOutline
          onClick={() => {
            sessionTitle !== ""
              ? console.log(`${sessionTitle}, now that's a title`)
              : console.log("that's not a title");
          }}
          sx={{ color: aoWhite, mr: 1, my: 0.5 }}
        />
      </Box>
    </>
  );
};
