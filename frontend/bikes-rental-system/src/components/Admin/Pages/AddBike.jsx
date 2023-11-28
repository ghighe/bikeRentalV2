import HeaderBar from "../../HeaderBar";
import { Grid } from "@mui/material";
import AddBikeForm from "../../AddBikeForm";
import ModifyBikesCard from "../../ModifyBikesCard";
import { AlertProvider } from "../../../providers/AlertProvider";

const AddBike = () => {
  return (
    <AlertProvider>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <HeaderBar headTitle={"AddBike"} badgeContent={10} />
        </Grid>
        <Grid item xs={12} md={8} mt={1}>
          <AddBikeForm />
        </Grid>
        <Grid item xs={12} md={8} mt={1}>
          <ModifyBikesCard />
        </Grid>
      </Grid>
    </AlertProvider>
  );
};

export default AddBike;
