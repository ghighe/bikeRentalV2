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
import InputAdornment from "@mui/material/InputAdornment";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAlert } from "../Hooks/useAlert";
import axios from "axios";
import { useState } from "react";

const AddBikeForm = () => {
  let isFormSubmited = false;
  const { showAlert } = useAlert();
  const [bikeTypeData, setBikeTypeData] = useState(null);

  const getBikeTypeData = async (bikeType) => {
    try {
      const response = await axios.post("/api/v1/bikeType", bikeType);
      if (response) {
        setBikeTypeData(response.data);
      }
    } catch (error) {
      console.error(`Bike Type cannot be fetched from database ${error}`);
    }
  };

  //check when the data object has been filled, intially it's an empty object

  const formik = useFormik({
    initialValues: {
      bikeType: "",
      info: "",
      price: 0
    },
    validationSchema: Yup.object({
      bikeType: Yup.string()
        .max(10, "Must be 10 characters or less!")
        .required("BikeType is required"),
      info: Yup.string()
        .max(50, "Must be 50 characters or less!")
        .required("Info is required"),
      price: Yup.number()
        .required("Price is required")
        .max(10, "Maximum amount is 10$")
    }),
    onSubmit: async (bikeData, { resetForm }) => {
      isFormSubmited = true;
      if (isFormSubmited) {
        await getBikeTypeData(bikeData);
        //console.log("bikeTypeData from submit", bikeTypeData);
        resetForm();
        showAlert(`${bikeTypeData?.successMessage}`, "success");
      } else {
        //error
        showAlert(`${bikeTypeData?.errorMessage}`, "error");
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
                    formik.touched.info && formik.errors.info
                      ? "error"
                      : "secondary"
                  }
                  fullWidth
                  name="info"
                  id="info"
                  label="Information about new bikeType"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.info}
                  {...formik.getFieldProps("info")}
                />
                {formik.touched.info && formik.errors.info ? (
                  <Box sx={{ color: "red" }}>{formik.errors.info}</Box>
                ) : null}
              </Grid>

              <Grid item>
                <TextField
                  color={
                    formik.touched.info && formik.errors.info
                      ? "error"
                      : "secondary"
                  }
                  sx={{ width: "10rem" }}
                  type="number"
                  InputProps={{
                    inputProps: { min: 0, max: 10 },
                    startAdornment: (
                      <InputAdornment position="start">$</InputAdornment>
                    )
                  }}
                  name="price"
                  id="price"
                  label="price_per_minute"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.price}
                  {...formik.getFieldProps("price")}
                />
                {formik.touched.price && formik.errors.price ? (
                  <Box sx={{ color: "red" }}>{formik.errors.price}</Box>
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
