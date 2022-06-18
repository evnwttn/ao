import { Box, Divider } from "@mui/material";
import { AOCommentContent } from "./modals/AOCommentContent";
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
          ...modalFontSx,
          display: "inline-flex",
          mb: 1,
        }}
      >
        <Box
          sx={{
            pr: 1,
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
        <Box sx={{ pl: 1 }}>{cell.parameter}</Box>
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
