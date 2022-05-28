import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Box, TextField, IconButton, Divider } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { NewModalContentList } from "./NewModalContentList";
import { newSessionModal, modalCenteredSx } from "../../assets/theme";

export const NewSesh = () => {
  const [sessionData, setSessionData] = useState();
  const [formNumber, setFormNumber] = useState(0);
  const [inputNumber, setInputNumber] = useState(0);
  const [inputTarget, setInputTarget] = useState("tracks");
  const textInput = React.useRef(null);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      parameters: ["title"],
    },
  });

  const onSubmit = (data) => {
    setFormNumber(formNumber + 1);
    setSessionData({ ...data });
  };

  const onSubmitTracks = (data) => {
    textInput.current.value = "";
    setInputNumber(1);
    setInputTarget("parameters");
    setFormNumber(formNumber + 1);
    setSessionData({ ...data });
  };

  const onAddTrackParameter = (data) => {
    textInput.current.value = "";
    setInputNumber(inputNumber + 1);
    setSessionData({ ...data });
  };

  useEffect(() => {
    console.log(sessionData);
  }, [sessionData]);

  return formNumber <= 1 ? (
    <Box
      sx={{
        ...modalCenteredSx,
      }}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        variant="standard"
        helperText={
          formNumber === 0
            ? "enter artist name to continue"
            : "enter a session title to continue"
        }
        margin="normal"
        autoComplete="off"
        {...(formNumber === 0 ? register("author") : register("id"))}
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
  ) : formNumber <= 3 ? (
    <>
      <Box
        component="form"
        sx={{
          ...modalCenteredSx,
        }}
        onSubmit={handleSubmit(onAddTrackParameter)}
      >
        <Box
          sx={{
            ...newSessionModal.text,
          }}
        >
          Enter the {""}
          {formNumber === 2 ? <b>track titles</b> : <b>session parameters</b>}
          {""} you wish to include in the
          {""} {sessionData.id} session. You can always add more later.
        </Box>
        <Box
          sx={{
            ...newSessionModal.field,
          }}
        >
          <TextField
            sx={{ ml: 13 }}
            variant="standard"
            margin="normal"
            inputRef={textInput}
            autoComplete="off"
            {...register(
              `${inputTarget}.${inputNumber}${formNumber === 2 ? `.title` : ``}`
            )}
          />
          <IconButton disableRipple type="submit">
            <AddCircleIcon sx={{ mr: 1 }} />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton
            disableRipple
            sx={{ p: "10px", ml: 1 }}
            onClick={
              formNumber === 2
                ? handleSubmit(onSubmitTracks)
                : handleSubmit(onSubmit)
            }
          >
            <CheckCircleIcon />
          </IconButton>
        </Box>
      </Box>
      <Box component="form">
        <NewModalContentList
          data={sessionData}
          input={inputTarget}
          onSubmit={() => console.log("ye")}
        />
      </Box>
    </>
  ) : (
    <>Hello</>
  );
};
