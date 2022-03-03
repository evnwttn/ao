import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import { aoWhite } from "../../assets/theme";

const boxStyle = {
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
};

const fontStyle = {
  fontWeight: "400",
  fontSize: "0.75rem",
  lineHeight: "1.66",
  fontFamily: "Noto Sans",
  letterSpacing: "0.03333em",
  color: aoWhite,
};

// const AddNewTrack = () => {
//   return null;
// };

export const NewModal = () => {
  const [sessionTitle, setSessionTitle] = useState("");
  const handleSessionTitle = (titleForm) => {
    setSessionTitle(titleForm.target.value);
  };
  const [titleFormCompleted, isFormCompleted] = useState(false);

  if (titleFormCompleted) {
    return (
      <>
        <Box sx={{ boxStyle, fontStyle }}>
          Enter the titles of tracks you wish to include in the{" "}
          {sessionTitle + " "} session. You can always add more later.
          <br />
          <AddCircleOutline
            onClick={() => console.log("yeah")}
            sx={{ color: aoWhite, mr: 1, my: 0.5, cursor: "pointer" }}
          />
        </Box>
      </>
    );
  } else {
    return (
      <>
        <Box sx={{ boxStyle }}>
          <TextField
            required
            label="New Session"
            variant="standard"
            size="small"
            color="divider"
            helperText="enter a session title to continue"
            margin="normal"
            value={sessionTitle}
            onChange={handleSessionTitle}
          />
        </Box>
        <Box>
          <AddCircleOutline
            onClick={() => {
              sessionTitle !== ""
                ? isFormCompleted(true)
                : console.log("that's not a title");
            }}
            sx={{ color: aoWhite, mr: 1, my: 0.5, cursor: "pointer" }}
          />
        </Box>
      </>
    );
  }
};
