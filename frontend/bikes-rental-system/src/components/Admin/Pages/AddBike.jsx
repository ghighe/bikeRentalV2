import HeaderBar from "../../HeaderBar";
import { Grid } from "@mui/material";
import AddBikeForm from "../../AddBikeForm";
import AvailableBikesCard from "../../AvailableBikesCard";

const AddBike = () => {
  return (
    <Grid container spacing={2} justifyContent="start">
      <Grid item xs={12}>
        <HeaderBar headTitle={"AddBike"} />
      </Grid>
      <Grid item xs={12} md={8} mt={1}>
        <AddBikeForm />
      </Grid>
      <Grid item xs={12} md={4} mt={3}>
        <AvailableBikesCard />
      </Grid>
    </Grid>
  );
};

export default AddBike;
