import React, { useState } from "react";
import { Box, TextField, IconButton, Divider } from "@mui/material";
import { useForm } from "react-hook-form";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { NewModalContentList } from "./NewModalContentList";
import { modalCenteredSx } from "../../assets/theme";

export const NewModalContent = () => {
  const [aoSessionTitle, setAoSessionTitle] = useState("");
  const [titleFormCompleted, setTitleFormCompleted] = useState(false);
  const [trackFormCompleted, setTrackFormCompleted] = useState(false);
  const [parameterFormCompleted, setParameterFormCompleted] = useState(false);
  const [aoData, setAoData] = useState([]);
  const [formTarget, setFormTarget] = useState(`track`);
  const [formNumber, setFormNumber] = useState(0);

  const textInput = React.useRef(null);

  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      sessionTitle: "",
      track: "",
      parameter: "",
    },
  });

  const onSubmitTitle = (data) => {
    data.sessionTitle !== ""
      ? setTitleFormCompleted(true) || setAoSessionTitle(watch("sessionTitle"))
      : console.log("");
  };

  const onSubmit = (data) => {
    setFormNumber(formNumber + 1);
    textInput.current.value = "";
    setAoData({ ...data });
  };

  const onCompleteTrackForm = () => {
    setTrackFormCompleted(true);
    setFormNumber(0);
    setFormTarget(`parameter`);
  };

  const onCompleteParameterForm = () => {
    setParameterFormCompleted(true);
  };

  // const [remove, setRemove] = useState(0);

  // const onRemove = (data, title) => {
  //   setRemove(data.track.indexOf(title));
  //   if (remove !== -1) {
  //     data.track.splice(remove, 1);
  //   }
  //   setAoData({ ...data });
  // };

  const onRemove = (data, title) => {
    let array = [...data.track];
    let index = array.indexOf(title);
    if (index !== -1) {
      array.splice(index, 1);
      setAoData({ track: array });
    }
    console.log(aoData.track);
  };

  // removePeople(e) {
  //   var array = [...this.state.people]; // make a separate copy of the array
  //   var index = array.indexOf(e.target.value)
  //   if (index !== -1) {
  //     array.splice(index, 1);
  //     this.setState({people: array});
  //   }
  // },

  return (
    <>
      {parameterFormCompleted ? (
        <Box>Completed {console.log(aoData)};</Box>
      ) : titleFormCompleted ? (
        <>
          <Box
            component="form"
            sx={{
              ...modalCenteredSx,
            }}
            onSubmit={handleSubmit(onSubmit)}
          >
            Enter the names of {formTarget}s you wish to include in the{" "}
            {aoSessionTitle} session. You can always add more later.
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
                  trackFormCompleted
                    ? onCompleteParameterForm()
                    : onCompleteTrackForm();
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
