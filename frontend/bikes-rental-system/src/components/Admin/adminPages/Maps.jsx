import HeaderBar from "../adminComponents/HeaderBar";
import SimulatedMap from "../adminComponents/SimulatedMap";
import { Grid } from "@mui/material";

const Maps = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12}>
        <HeaderBar headTitle={"Maps"} badgeContent={0} />
      </Grid>
      <Grid item xs={12} md={8} mt={1}>
        <SimulatedMap />
      </Grid>
    </Grid>
  );
};

export default Maps;
