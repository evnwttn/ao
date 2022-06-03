import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Box, TextField, IconButton, Divider } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { NewModalContentList } from "./NewModalContentList";
import { newSessionModal, modalCenteredSx } from "../../assets/theme";

export const NewModalContent = () => {
  const [sessionData, setSessionData] = useState();
  const [formNumber, setFormNumber] = useState(0);
  const [inputArray, setInputArray] = useState([]);
  const textInput = React.useRef(null);
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      parameters: ["title"],
    },
  });

  const onSubmitForm = (data) => {
    setFormNumber(formNumber + 1);
    setSessionData({ ...data });
    textInput.current.value = "";
  };

  const onSubmitTrackOrParameter = () => {
    setInputArray((inputArray) => [...inputArray, textInput.current.value]);
    textInput.current.value = "";
  };

  const onRemoveTrackOrParameter = (title) => {
    setInputArray((previousArray) =>
      previousArray.filter((previousInput) => previousInput !== title)
    );
  };

  const onSubmitList = (data) => {
    formNumber === 2 &&
      setInputArray((previousArray) =>
        previousArray.filter((previousInput) => previousInput === "title")
      );
    setFormNumber(formNumber + 1);
    setSessionData({ ...data });
  };

  useEffect(() => {
    console.log(sessionData);
  }, [formNumber, sessionData]);

  return formNumber <= 1 ? (
    <Box
      sx={{
        ...modalCenteredSx,
      }}
      component="form"
      onSubmit={handleSubmit(onSubmitForm)}
    >
      <TextField
        variant="standard"
        inputRef={textInput}
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
        onSubmit={handleSubmit(onSubmitTrackOrParameter)}
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
            formNumber === 2
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
    <>Hello</>
  );
};
