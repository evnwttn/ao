import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Box, TextField, IconButton } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { modalCenteredSx } from "../../assets/theme";

export const NewSesh = () => {
  const [sessionId, setSessionId] = useState();
  const [sessionAuthor, setSessionAuthor] = useState();
  //   const [sessionData, setSessionData] = useState("");
  const [formNumber, setFormNumber] = useState(0);
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      parameters: ["title"],
    },
  });

  const onSubmit = (data) => {
    data.id && setSessionId(watch("id"));
    sessionId && setFormNumber(formNumber + 1);
    data.author && setSessionAuthor(watch("author"));
    sessionAuthor && setFormNumber(formNumber + 1);
    console.log(data);
  };

  return (
    formNumber <= 1 && (
      <Box
        sx={{
          ...modalCenteredSx,
        }}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          variant="standard"
          helperText="enter a session title to continue"
          margin="normal"
          autoComplete="off"
          {...(formNumber === 0 ? register("id") : register("author"))}
        />
        <Box>
          <IconButton disableRipple type="submit">
            <CheckCircleIcon
              sx={{
                my: 0.5,
              }}
            />
          </IconButton>
        </Box>
      </Box>
    )
  );
};
