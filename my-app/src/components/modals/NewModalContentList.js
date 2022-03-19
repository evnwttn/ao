import { useState } from "react";
import { useForm } from "react-hook-form";
import { Box, IconButton, List, ListItem, ListItemText } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { palette } from "../../assets/theme";

export const NewModalContentList = ({ aoOutput, target }) => {
  const [aoUpdate, setAoUpdate] = useState([]);
  const [formTarget, setFormTarget] = useState(`track`);
  const [formNumber, setFormNumber] = useState(0);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setFormNumber(formNumber + 1);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      {aoOutput.track !== undefined ? (
        <List sx={{ width: "100%", bgcolor: palette.aoBlack }}>
          {aoOutput.track.map((title) => (
            <ListItem
              key={title}
              secondaryAction={
                <IconButton
                  value={title}
                  {...register(`${formTarget}.${formNumber}`)}
                  type="submit"
                >
                  <ClearIcon />
                </IconButton>
              }
            >
              <ListItemText primary={`${title}`} />
            </ListItem>
          ))}
        </List>
      ) : (
        <>{null}</>
      )}
    </Box>
  );
};

// for (let i = 0; i < aoOutput.track.length; i++) {
//   if (aoOutput.track[i] === title) {
//     const toRemove = aoOutput.track[i];
//     aoOutput.track.splice(toRemove, 1);
//     setAoUpdate(aoOutput);
//     console.log({ aoUpdate });

// setAoOutput({ ...data });
