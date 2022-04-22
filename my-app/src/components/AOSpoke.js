import SvgIcon from "@mui/material/SvgIcon";

export const AOSpoke = (spoke) => {
  return (
    <SvgIcon
      sx={{
        height: "11vw",
        width: "11vw",
        transform: spoke.transform,
      }}
    >
      <svg viewBox="10 -10 24 24">
        <path
          fill={spoke.color}
          d="M5.95 11h13.988A8.023 8.023 0 0 0 13 4.062V2.049c4.714.475 8.476 4.237 8.95 8.951Z"
        />
      </svg>
    </SvgIcon>
  );
};
