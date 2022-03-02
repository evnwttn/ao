import { Box, TextField } from "@mui/material";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import { aoWhite } from "../../assets/theme";
import React, { useState } from "react";

export const NewModal = () => {
  let [hasSessionTitle, setSessionTitle] = useState(false);

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
          id="session-title"
          label="New Session"
          variant="standard"
          size="small"
          color="divider"
          helperText="Please enter a session title to continue"
          margin="normal"
        />
      </Box>
      <Box>
        <AddCircleOutline
          onClick={() => {
            setSessionTitle((hasSessionTitle = true));
            console.log(hasSessionTitle);
          }}
          sx={{ color: aoWhite, mr: 1, my: 0.5 }}
        />
      </Box>
    </>
  );
};

// const NewModalTracks = () => {
//   return null;
// };
