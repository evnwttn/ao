import SvgIcon from "@mui/material/SvgIcon";
import { Box } from "@mui/system";
import { palette } from "../assets/theme";

const wheelData = {
  topRow: [
    { id: "yellow", color: palette.aoYellow, rotate: "rotate(270deg)" },
    { id: "blue", color: palette.aoBlue },
  ],
  bottomRow: [
    { id: "grey", color: palette.aoGrey, rotate: "rotate(180deg)" },
    { id: "empty", color: "transparent", rotate: "rotate(90deg)" },
  ],
};

const Build = () => {
  return (
    <>
      <Box></Box>
      <Box></Box>
    </>
  );
};

const Wheel = () => {
  return (
    <>
      <Box>
        <SvgIcon
          id="yellow"
          viewBox="10 -10 24 24"
          sx={{
            height: "10vw",
            width: "10vw",
            transform: "rotate(270deg)",
            color: palette.aoYellow,
          }}
        >
          <svg>
            <path d="M5.95 11h13.988A8.023 8.023 0 0 0 13 4.062V2.049c4.714.475 8.476 4.237 8.95 8.951Z" />
          </svg>
        </SvgIcon>
        <SvgIcon
          id="blue"
          viewBox="10 -10 24 24"
          sx={{
            color: palette.aoBlue,
            height: "10vw",
            width: "10vw",
          }}
        >
          <svg>
            <path d="M5.95,11L19.938,11C19.482,7.386 16.614,4.518 13,4.062L13,2.049C17.714,2.524 21.476,6.286 21.95,11Z" />
          </svg>
        </SvgIcon>
      </Box>
      <Box>
        <SvgIcon
          id="grey"
          viewBox="10 -10 24 24"
          sx={{
            transform: "rotate(180deg)",
            color: palette.aoGrey,
            height: "10vw",
            width: "10vw",
          }}
        >
          <svg>
            <path d="M5.95 11h13.988A8.023 8.023 0 0 0 13 4.062V2.049c4.714.475 8.476 4.237 8.95 8.951Z" />
          </svg>
        </SvgIcon>
        <SvgIcon
          id="transparent"
          viewBox="10 -10 24 24"
          sx={{
            transform: "rotate(90deg)",
            color: "transparent",
            height: "10vw",
            width: "10vw",
          }}
        >
          <svg>
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
