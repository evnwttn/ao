import { Box, Grid } from "@mui/material/";
import { gridDomSx, cellSx } from "../assets/theme";
import { AOCell } from "./AOCell";
import { data } from "../assets/TestData";

export const AOGrid = () => {
  // HANDLES CELL HIGHLIGHT (INCOMPLETE)
  // const [cellHover, setCellHover] = useState();
  // const [trackHighlight, setTrackHighlight] = useState();

  // useEffect(() => {
  //   cellHover && cell.track === cellHover.track
  //     ? setTrackHighlight(cellHover.track)
  //     : console.log("poo");
  // }, [cellHover, cell.track]);

  // useEffect(() => {
  //   if (cell.track === cellHover.track) {
  //     console.log(cell);
  //   }
  // }, [cellHover]);

  const handleHover = (elm) => {
    console.log(elm.target);
  };

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
              <Grid
                container
                key={track}
                spacing={"0.75vw"}
                onMouseEnter={(key) => handleHover(key)}
              >
                {data.parameters.map((parameter) => {
                  return parameter === `title` ? (
                    <Grid item sm={1} key={parameter}>
                      <Box sx={{ ...cellSx.titleCell }}>{track}</Box>
                    </Grid>
                  ) : (
                    <AOCell
                      key={parameter}
                      track={track}
                      parameter={parameter}
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
