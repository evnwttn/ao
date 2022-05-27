import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Box, TextField, IconButton } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { modalCenteredSx, palette } from "../../assets/theme";

export const NewSesh = () => {
  const [sessionId, setSessionId] = useState();
  const [sessionData, setSessionData] = useState("");
  const [form, setForm] = useState(0);
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      parameters: ["title"],
    },
  });

  const onSubmitTitle = (data) => {
    (data.sessionTitle && setForm(form + 1)) ||
      setSessionId(watch("sessionTitle"));
  };

  return (
    form === 0 && (
      <Box
        sx={{
          ...modalCenteredSx,
        }}
        component="form"
        onSubmit={handleSubmit(onSubmitTitle)}
      >
        <TextField
          variant="standard"
          helperText="enter a session title to continue"
          margin="normal"
          autoComplete="off"
          {...register("sessionTitle", { required: true })}
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
