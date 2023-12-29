import HeaderBar from "../adminComponents/HeaderBar";
import BikesTable from "../adminComponents/BikesTable";
import InvoicesTable from "../adminComponents/InvoicesTable";
import { Grid } from "@mui/material";

const Database = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12}>
        <HeaderBar headTitle={"Database"} badgeContent={0} />
      </Grid>
      <Grid item xs={12} md={8} mt={1}>
        <BikesTable />
      </Grid>
      <Grid item xs={12} md={8} mt={1}>
        <InvoicesTable />
      </Grid>
    </Grid>
  );
};

export default Database;
