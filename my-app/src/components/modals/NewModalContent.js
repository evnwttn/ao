import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Box, TextField, IconButton, Divider } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { NewModalContentList } from "./NewModalContentList";
import { NewModalContentTextfieldForm } from "./NewModalContentTextfieldForm";
import { newSessionModal, modalCenteredSx } from "../../assets/theme";

export const NewModalContent = () => {
  const [sessionData, setSessionData] = useState();
  const [startNewSession, startNewSessionLaunch] = useState(false);
  const [formPrompt, setFormPrompt] = useState(0);
  const [inputArray, setInputArray] = useState([]);
  const textInput = React.useRef(null);
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      parameters: ["title"],
    },
  });

  const onSubmitForm = (data) => {
    setFormPrompt(formPrompt + 1);
    setSessionData({ ...data });
    textInput.current.value = "";
  };

  const onSubmitTrackOrParameter = () => {
    formPrompt === 2 && inputArray.length <= 11
      ? setInputArray((inputArray) => [...inputArray, textInput.current.value])
      : formPrompt === 3 && inputArray.length <= 10
      ? setInputArray((inputArray) => [...inputArray, textInput.current.value])
      : alert(
          `Maximum Number of ${
            formPrompt === 2 ? `Tracks` : `Parameters`
          } Reached`
        );
    textInput.current.value = "";
  };

  const onRemoveTrackOrParameter = (title) => {
    setInputArray((previousArray) =>
      previousArray.filter((previousInput) => previousInput !== title)
    );
  };

  const onSubmitList = (data) => {
    formPrompt === 2 &&
      setInputArray((previousArray) =>
        previousArray.filter((previousInput) => previousInput === "title")
      );
    setFormPrompt(formPrompt + 1);
    setSessionData({ ...data });
  };

  useEffect(() => {
    formPrompt === 4 && startNewSessionLaunch(true);
  }, [formPrompt, sessionData]);

  return formPrompt <= 1 ? (
    <NewModalContentTextfieldForm
      handleSubmit={handleSubmit}
      onSubmitForm={onSubmitForm}
      textInput={textInput}
      formPrompt={formPrompt}
      register={register}
    />
  ) : formPrompt <= 3 ? (
    <>
      <Box
        component="form"
        sx={{
          ...modalCenteredSx,
        }}
        onSubmit={handleSubmit(onSubmitTrackOrParameter)}
      >
        <Box
          sx={{
            ...newSessionModal.text,
          }}
        >
          Enter the {""}
          {formPrompt === 2 ? <b>track titles</b> : <b>session parameters</b>}
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
          />
          <IconButton disableRipple type="submit">
            <AddCircleIcon sx={{ mr: 1 }} />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        </Box>
      </Box>
      <Box
        component="form"
        onClick={() => {
          inputArray.forEach((title, index) => {
            formPrompt === 2
              ? setValue(`tracks.${index}.title`, title)
              : setValue(`parameters.${index + 1}`, title);
          });
        }}
        onSubmit={handleSubmit(onSubmitList)}
      >
        <IconButton type="submit" disableRipple sx={{ p: "10px", ml: 1 }}>
          <CheckCircleIcon />
        </IconButton>
      </Box>
      <Box component="form">
        <NewModalContentList
          data={inputArray}
          onSubmit={(title) => onRemoveTrackOrParameter(`${title}`)}
        />
      </Box>
    </>
  ) : (
    startNewSession && (
      <Navigate
        to="/aogrid"
        state={{ from: "new", data: sessionData }}
        replace={true}
      />
    )
  );
};
