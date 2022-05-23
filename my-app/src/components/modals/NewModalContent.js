import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { NewModalContentList } from "./NewModalContentList";
import { modalCenteredSx, palette } from "../../assets/theme";
import { Box, TextField, IconButton, Divider } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export const NewModalContent = () => {
  const [aoSessionTitle, setAoSessionTitle] = useState("");
  const [titleFormCompleted, setTitleFormCompleted] = useState(false);
  const [tracksFormCompleted, setTracksFormCompleted] = useState(false);
  const [parametersFormCompleted, setParametersFormCompleted] = useState(false);
  const [aoData, setAoData] = useState([]);
  const [formTarget, setFormTarget] = useState(`tracks`);
  const [formNumber, setFormNumber] = useState(0);

  const textInput = React.useRef(null);

  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      sessionTitle: "",
      parameters: ["title"],
    },
  });

  const onSubmitTitle = (data) => {
    (data.sessionTitle && setTitleFormCompleted(true)) ||
      setAoSessionTitle(watch("sessionTitle"));
  };

  const onSubmit = (data) => {
    setFormNumber(formNumber + 1);
    textInput.current.value = "";
    setAoData({ ...data });
  };

  const onCompleteTracksForm = () => {
    setTracksFormCompleted(true);
    setFormNumber(1);
    setFormTarget(`parameters`);
  };

  // onRemove filters through, and removes an element from
  // the track title or session parameter arrays generated
  // by user input (AoData.tracks/parameters)

  const onRemove = (data, title) => {
    formTarget === "tracks"
      ? setAoData({
          tracks: aoData.tracks.filter((parameter) => {
            return parameter !== title && parameter;
          }),
        })
      : formTarget === "parameters" &&
        setAoData({
          parameters: aoData.parameters.filter((parameter) => {
            return parameter !== title && parameter;
          }),
        });
  };

  return (
    <>
      {parametersFormCompleted ? (
        <Box></Box>
      ) : titleFormCompleted ? (
        <>
          <Box
            component="form"
            sx={{
              ...modalCenteredSx,
            }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Box
              sx={{
                flexDirection: "row",
                "b, strong": {
                  color: palette.aoRed,
                },
              }}
            >
              {formTarget === "tracks" ? (
                <>
                  Enter the <b>track titles</b> you wish to include in the{" "}
                  {aoSessionTitle} session. You can always add more later.
                </>
              ) : (
                <>
                  Enter the <b>session parameters</b> (ie. guitar, bass, mixing)
                  you wish to include in the {aoSessionTitle} session. You can
                  always add more later.
                </>
              )}
            </Box>
            <Box
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 500,
              }}
            >
              <TextField
                sx={{ ml: 13 }}
                variant="standard"
                margin="normal"
                inputRef={textInput}
                autoComplete="off"
                {...register(`${formTarget}.${formNumber}`)}
              />
              <IconButton disableRipple type="submit">
                <AddCircleIcon sx={{ mr: 1 }} />
              </IconButton>
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <IconButton
                disableRipple
                sx={{ p: "10px", ml: 1 }}
                onClick={() => {
                  tracksFormCompleted
                    ? setParametersFormCompleted(true)
                    : onCompleteTracksForm();
                }}
              >
                <CheckCircleIcon />
              </IconButton>
            </Box>
          </Box>
          <Box component="form">
            <NewModalContentList
              input={aoData}
              target={formTarget}
              onSubmit={handleSubmit(onRemove)}
            />
          </Box>
        </>
      ) : (
        <>
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
        </>
      )}
    </>
  );
};
