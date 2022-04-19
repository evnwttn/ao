import SvgIcon from "@mui/material/SvgIcon";

const Wheel = (props) => {
  return (
    <SvgIcon {...props}>
      <svg
        width="24px"
        height="24px"
        viewBox="-2 -2 24 24"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMin"
        class="jam jam-pie-chart-alt"
      >
        <path d="M19.95 11c-.501 5.053-4.765 9-9.95 9-5.523 0-10-4.477-10-10C0 4.815 3.947.551 9 .05v2.012A8.001 8.001 0 0 0 10 18a8.001 8.001 0 0 0 7.938-7h2.013zm0-2h-2.012A8.004 8.004 0 0 0 11 2.062V.049A10.003 10.003 0 0 1 19.95 9z" />
      </svg>
    </SvgIcon>
  );
};

export const AOColourWheel = (cellColour) => {
  return <Wheel />;
};

/* <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<circle cx="50" cy="50" r="50" />
</svg> */
