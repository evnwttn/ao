import { Box, Grid } from "@mui/material/";
import { gridDomSx, cellSx } from "../assets/theme";
import { AOCell } from "./AOCell";
import { data } from "../assets/TestData";

export const AOGrid = () => {
  return (
    <Box
      sx={{
        marginLeft: "2.5vw",
        marginRight: "2.5vw",
        marginTop: "2.5vh",
      }}
    >
      <Box sx={{ ...gridDomSx }}>
        <Grid container>
          <Grid container spacing={"0.75vw"}>
            {data.parameters.map((parameterTitle) => {
              return (
                <Grid item sm={1} key={parameterTitle}>
                  <Box sx={{ ...cellSx.paraCell }}>{parameterTitle}</Box>
                </Grid>
              );
            })}
          </Grid>
          {data.tracks.map((track) => {
            return (
              <Grid container key={track} spacing={"0.75vw"}>
                {data.parameters.map((parameter) => {
                  return parameter === `title` ? (
                    <Grid item sm={1} key={parameter}>
                      <Box sx={{ ...cellSx.titleCell }}>{track}</Box>
                    </Grid>
                  ) : (
                    <AOCell
                      key={parameter}
                      cell={{ track, parameter }}
                      parameter={parameter}
                      track={track}
                    />
                  );
                })}
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};
