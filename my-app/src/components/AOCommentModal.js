import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import { Divider } from "@mui/material";
import { AOCommentContent } from "./modals/AOCommentContent";
import { modalFontSx, modalBoxStyling, palette } from "../assets/theme";

export const AOCommentModal = ({ onCommentChange, comment, cell }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Box
      sx={{
        ...modalFontSx,
        ...modalBoxStyling,
      }}
    >
      <Box
        sx={{
          ...modalFontSx,
          display: "inline-flex",
          mb: 1,
        }}
      >
        <Box sx={{ pr: 1, fontWeight: "bold", color: palette.aoRed }}>
          {cell.track}
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ color: palette.aoDivider }}
        />
        <Box sx={{ pl: 1 }}>{cell.parameter}</Box>
      </Box>
      <Divider variant="middle" sx={{ color: palette.aoDivider }} />
      <AOCommentContent
        onCommentChange={onCommentChange}
        cell={cell}
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      />
    </Box>
  );
};
