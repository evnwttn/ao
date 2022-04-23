import { Box } from "@mui/system";

export const AOSpoke = (spoke) => {
  return (
    <Box
      sx={{
        display: "inline-flex",
        svg: {
          fill: spoke.color,
          transform: spoke.transform,
        },
      }}
    >
      <svg height="10em" width="10em" viewBox="10 -10 24 24">
        <path d="M5.95 11h13.988A8.023 8.023 0 0 0 13 4.062V2.049c4.714.475 8.476 4.237 8.95 8.951Z" />
      </svg>
    </Box>
  );
};
