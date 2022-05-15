import { Box } from "@mui/system";
import { wheelSx, svgShapes } from "../assets/theme";
import { Tooltip } from "@mui/material/";
import { palette } from "../assets/theme";

export const AOSpoke = ({
  color,
  transform,
  handleClick,
  toolTip,
  placement,
}) => {
  return (
    <Box
      sx={
        color === "transparent"
          ? { ...wheelSx.transparent }
          : { ...wheelSx.spoke }
      }
    >
      <svg
        width="12vw"
        fill={color}
        onClick={() => {
          handleClick(color);
        }}
        transform={transform}
        viewBox="11 -11 24 24"
      >
        <Tooltip
          title={toolTip}
          placement={placement}
          componentsProps={{
            tooltip: {
              sx: {
                bgcolor: palette.aoBlack,
                color: palette.aoWhite,
                border: `solid 1px ${palette.aoWhite}`,
              },
            },
          }}
        >
          {color === "transparent" ? (
            <rect width="24" height="24" />
          ) : (
            <path d={svgShapes.quarterCircle} />
          )}
        </Tooltip>
      </svg>
    </Box>
  );
};
