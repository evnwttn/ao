import SvgIcon from "@mui/material/SvgIcon";
import { Box } from "@mui/system";
import { palette } from "../assets/theme";

const Spoke = (spoke) => {
  return (
    <SvgIcon
      id={spoke.id}
      viewBox="10 -10 24 24"
      sx={{
        height: "10vw",
        width: "10vw",
        transform: spoke.transform,
        color: spoke.color,
      }}
    >
      <svg>
        <path d="M5.95 11h13.988A8.023 8.023 0 0 0 13 4.062V2.049c4.714.475 8.476 4.237 8.95 8.951Z" />
      </svg>
    </SvgIcon>
  );
};

export const AOColourWheel = () => {
  return (
    <>
      <Box>
        <Spoke
          id="yellow"
          color={palette.aoYellow}
          transform="rotate(270deg)"
        />
        <Spoke id="blue" color={palette.aoBlue} transform="none" />
      </Box>
      <Box>
        <Spoke id="grey" color={palette.aoGrey} transform="rotate(180deg)" />
        <Spoke id="empty" color="transparent" transform="rotate(90deg)" />
      </Box>
    </>
  );
};
