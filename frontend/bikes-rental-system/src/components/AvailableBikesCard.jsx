import {
  List,
  ListItem,
  ListItemText,
  CardHeader,
  CardContent,
  Card,
  Typography
} from "@mui/material";
import BikeIcon from "@mui/icons-material/DirectionsBike";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

const AvailableBikesCard = () => {
  const testBikes = ["Classic Bike", "Electric Bike", "Mountain Bike"];

  return (
    <Card
      variant="outlined"
      sx={{
        width: 300,
        height: "100%",
        marginLeft: "2rem"
      }}
    >
      <CardHeader
        title={
          <Typography variant="p" component="p">
            Available Bike Types
          </Typography>
        }
        sx={{
          backgroundColor: "#7b1fa2",
          color: "white"
        }}
      ></CardHeader>
      <CardContent>
        <List>
          {testBikes.map((bike, index) => (
            <ListItem key={index} sx={{ cursor: "pointer" }}>
              <BikeIcon color="primary" sx={{ marginRight: 1 }} />
              <ListItemText primary={bike} />
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default AvailableBikesCard;
