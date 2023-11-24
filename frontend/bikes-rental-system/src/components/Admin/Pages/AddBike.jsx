import HeaderBar from "../../HeaderBar";
import { Grid } from "@mui/material";
import AddBikeForm from "../../AddBikeForm";
import ModifyBikesCard from "../../ModifyBikesCard";

const AddBike = () => {
  return (
    <>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <HeaderBar headTitle={"AddBike"} />
        </Grid>
        <Grid item xs={12} md={8} mt={1}>
          <AddBikeForm />
        </Grid>
        <Grid item xs={12} md={8} mt={1}>
          <ModifyBikesCard />
        </Grid>
      </Grid>
    </>
  );
};

export default AddBike;
