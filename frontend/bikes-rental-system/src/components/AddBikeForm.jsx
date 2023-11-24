import {
  Card,
  CardContent,
  CardActions,
  TextField,
  Button,
  Grid,
  CardHeader,
  Typography,
  Box
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAlert } from "../Hooks/useAlert";

const AddBikeForm = () => {
  let isFormSubmited = false;
  const { showAlert } = useAlert();

  const formik = useFormik({
    initialValues: {
      bikeType: "",
      aditionalInfo: ""
    },
    validationSchema: Yup.object({
      bikeType: Yup.string()
        .max(10, "Must be 10 characters or less!")
        .required("Field required"),
      aditionalInfo: Yup.string()
        .max(50, "Must be 50 characters or less!")
        .required("Field required")
    }),
    onSubmit: (addBikeType, { resetForm }) => {
      isFormSubmited = true;
      if (isFormSubmited) {
        showAlert("BikeType added successfully!", "success");
        //console.log(addBikeType);
        resetForm();
      }
    }
  });

  return (
    <Grid container spacing={2}>
      <Card
        variant="outlined"
        sx={{
          width: 800,
          height: "auto",
          margin: "auto",
          marginTop: "2rem"
        }}
      >
        <CardHeader
          title={
            <Typography variant="p" component="p">
              Add a new bike in the systeml
            </Typography>
          }
          sx={{
            backgroundColor: "#e8403d",
            color: "white"
          }}
        ></CardHeader>
        <form onSubmit={formik.handleSubmit}>
          <CardContent>
            <Grid container spacing={2} direction="column">
              <Grid item xs={12} sm={8}>
                <TextField
                  color={
                    formik.touched.bikeType && formik.errors.bikeType
                      ? "error"
                      : "secondary"
                  }
                  fullWidth
                  name="bikeType"
                  id="bikeType"
                  label="Type Classic, Electric, Scooter"
                  onChange={formik.handleChange}
                  value={formik.values.bikeType}
                  {...formik.getFieldProps("bikeType")}
                />
                {formik.touched.bikeType && formik.errors.bikeType ? (
                  <Box sx={{ color: "red" }}>{formik.errors.bikeType}</Box>
                ) : null}
              </Grid>
              <Grid item>
                <TextField
                  color={
                    formik.touched.aditionalInfo && formik.errors.aditionalInfo
                      ? "error"
                      : "secondary"
                  }
                  fullWidth
                  name="aditionalInfo"
                  id="aditionalInfo"
                  label="Information about new bikeType"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.aditionalInfo}
                  {...formik.getFieldProps("aditionalInfo")}
                />
                {formik.touched.aditionalInfo && formik.errors.aditionalInfo ? (
                  <Box sx={{ color: "red" }}>{formik.errors.aditionalInfo}</Box>
                ) : null}
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
            <Button
              type="submit"
              variant="contained"
              disabled={!(formik.isValid && formik.dirty)}
              color="buttonRed"
            >
              Add Bike
            </Button>
          </CardActions>
        </form>
      </Card>
    </Grid>
  );
};

export default AddBikeForm;
