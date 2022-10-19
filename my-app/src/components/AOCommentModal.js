import { Box, Divider } from "@mui/material";
import { AOCommentContent } from "./modals/index";
import { modalFontSx, modalBoxStyling, palette } from "../assets/theme";

export const AOCommentModal = ({
  cell,
  cellComment,
  register,
  handleSubmit,
  onSubmit,
}) => {
  return (
    <Box
      sx={{
        ...modalFontSx,
        ...modalBoxStyling,
      }}
    >
      <Box
        sx={{
          display: "inline-flex",
          mb: "1vw",
        }}
      >
        <Box
          sx={{
            pr: "0.75vw",
            fontWeight: "800",
            color: palette.aoRed,
          }}
        >
          {cell.track.title}
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ color: palette.aoDivider }}
        />
        <Box sx={{ pl: "0.75vw" }}>{cell.parameter}</Box>
      </Box>
      <Divider variant="middle" sx={{ color: palette.aoDivider }} />
      <AOCommentContent
        cell={cell}
        cellComment={cellComment}
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      />
    </Box>
  );
};
