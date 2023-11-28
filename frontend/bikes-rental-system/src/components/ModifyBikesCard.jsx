/* eslint-disable no-unused-vars */
import {
  CardHeader,
  CardContent,
  Card,
  Typography,
  Box,
  TextField,
  CardActions,
  Button,
  Stack
} from "@mui/material";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import Pagination from "@mui/material/Pagination";

const bikeTypeData = [
  { bikeTypeId: 1, bikeType: "Classic" },
  { bikeTypeId: 2, bikeType: "Electric" },
  { bikeTypeId: 3, bikeType: "Scooter" },
  { bikeTypeId: 4, bikeType: "N/A" }
];

const ModifyBikesCard = () => {
  const [edited, isEdited] = useState(false);
  const [filterBikeData, setFilterBikeData] = useState(bikeTypeData);
  const [currentPage, setCurrentPage] = useState(0);

  const handleEditBikeType = (bikeTypeId) => {
    console.log(`handleBikeTypeFunction ${bikeTypeId}`);
    isEdited(true);
  };

  const handleChangeBikeType = (e, index) => {
    const updatedBikeTypeData = bikeTypeData.map((type, i) => {
      if (i === index) {
        return { ...type, bikeType: e.target.value };
      }
      return type;
    });
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleDeleteBikeType = (id) => {
    const filteredBikeTypeData = filterBikeData.filter(
      (bikeType) => bikeType.bikeTypeId !== id
    );
    setFilterBikeData(filteredBikeTypeData);
  };

  const onSaveChanges = () => {
    isEdited(false);
  };

  const titleStyle = {
    marginLeft: 1,
    cursor: "pointer"
  };

  const filteredBikes = filterBikeData.map((bike, index) => (
    <Box key={bike.bikeTypeId}>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          height: "auto"
        }}
      >
        <TextField
          fullWidth
          id="standard-basic"
          variant="standard"
          disabled={!edited}
          defaultValue={`${bike.bikeType}`}
          onChange={(e) => handleChangeBikeType(e, index)}
          required
        />
        {!edited && (
          <IconButton
            aria-label="edit"
            color="primary"
            onClick={() => handleEditBikeType(bike.bikeTypeId)}
          >
            <EditIcon />
          </IconButton>
        )}
        <IconButton
          aria-label="delete"
          color="error"
          onClick={() => handleDeleteBikeType(bike.bikeTypeId)}
        >
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  ));

  return (
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
          <Box sx={{ display: "flex", gap: 5, fontSize: "0.2rem" }}>
            <Typography sx={titleStyle}>Modify:</Typography>
            <Typography sx={titleStyle}>
              <FormatListNumberedIcon sx={{ marginRight: "0.3rem" }} />
              Bike Types
            </Typography>
            <Typography sx={titleStyle}>
              <PedalBikeIcon sx={{ marginRight: "0.3rem" }} />
              Bikes
            </Typography>
          </Box>
        }
        sx={{
          backgroundColor: "#962dae",
          color: "white"
        }}
      ></CardHeader>
      <CardContent>{filteredBikes}</CardContent>
      {edited && (
        <CardActions
          sx={{
            justifyContent: "flex-end",
            paddingRight: "1rem",
            paddingBottom: "1rem"
          }}
        >
          <Button variant="contained" color="buttonRed" onClick={onSaveChanges}>
            Save changes
          </Button>
        </CardActions>
      )}
      <Box display="flex" justifyContent="center" alignItems="center">
        <Stack spacing={2} mt={2} mb={2}>
          <Pagination count={4} color="secondary" />
        </Stack>
      </Box>
    </Card>
  );
};

export default ModifyBikesCard;
