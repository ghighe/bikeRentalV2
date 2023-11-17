import {
  Card,
  CardContent,
  CardActions,
  TextField,
  Button,
  Grid,
  CardHeader,
  Typography
} from "@mui/material";

const AddBikeForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form was submited");
  };

  return (
    <Grid container spacing={2}>
      <Card
        variant="outlined"
        sx={{
          width: 800,
          height: 280,
          margin: "auto",
          marginTop: "2rem"
        }}
      >
        <CardHeader
          title={
            <Typography variant="p" component="p">
              Add a new bike in the system
            </Typography>
          }
          sx={{
            backgroundColor: "#7b1fa2",
            color: "white"
          }}
        ></CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <Grid container spacing={2} direction="column">
              <Grid item xs={12} sm={8}>
                <TextField
                  fullWidth
                  id="bikeType"
                  label="Type (1 - Classic, 2 - Electric, 3 - Scooter)"
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  id="extraInfo"
                  label="Here you can specify additional information"
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions
            sx={{
              justifyContent: "flex-end",
              paddingRight: "1rem",
              paddingBottom: "1rem"
            }}
          >
            <Button type="submit" variant="contained" color="primary">
              Add Bike
            </Button>
          </CardActions>
        </form>
      </Card>
    </Grid>
  );
};

export default AddBikeForm;
