import SvgIcon from "@mui/material/SvgIcon";
import { Box } from "@mui/system";
import { palette } from "../assets/theme";

const Wheel = (props) => {
  return (
    <>
      <Box>
        {/* TOP LEFT // YELLOW */}
        <SvgIcon
          sx={{
            backgroundColor: "black",
            transform: "rotate(270deg)",
          }}
        >
          <svg color={palette.aoYellow}>
            <path d="M5.95 11h13.988A8.023 8.023 0 0 0 13 4.062V2.049c4.714.475 8.476 4.237 8.95 8.951Z" />
          </svg>
        </SvgIcon>
        {/* TOP RIGHT // BLUE */}
        <SvgIcon sx={{ backgroundColor: "black" }}>
          <svg color={palette.aoBlue}>
            <path d="M21.95,11L19.938,11C19.482,7.386 16.614,4.518 13,4.062L13,2.049C17.714,2.524 21.476,6.286 21.95,11Z" />
          </svg>
        </SvgIcon>
      </Box>
      <Box>
        <SvgIcon
          sx={{
            transform: "rotate(180deg)",
            backgroundColor: "black",
          }}
        >
          <svg color={palette.aoGrey}>
            <path d="M5.95 11h13.988A8.023 8.023 0 0 0 13 4.062V2.049c4.714.475 8.476 4.237 8.95 8.951Z" />
          </svg>
        </SvgIcon>
        <SvgIcon
          sx={{
            transform: "rotate(90deg)",
            backgroundColor: "black",
          }}
        >
          <svg color="transparent">
            <path d="M5.95 11h13.988A8.023 8.023 0 0 0 13 4.062V2.049c4.714.475 8.476 4.237 8.95 8.951Z" />
          </svg>
        </SvgIcon>
      </Box>
    </>
  );
};

export const AOColourWheel = (cellColour) => {
  return <Wheel />;
};
