import { createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
export const theme = createTheme({
  palette: {
    primary: {
      main: purple[700],
      light: "skyblue"
    },
    secondary: {
      main: purple[700]
    },
    otherColor: {
      main: "#999"
    }
  }
});

// const BlueButton = styled(Button)({
//   backgroundColor: "skyblue",
//   color: "#888",
//   margin: 5,
//   "&:hover": {
//     backgroundColor: "lightblue"
//   },
//   "&:disabled": {
//     backgroundColor: "gray",
//     color: "pink"
//   }
// });

// const MystyleDiv = styled(Typography)({
//   width: "25%",
//   height: "3rem",
//   margin: "auto",
//   backgroundColor: "green",
//   color: "white",
//   "&:hover": {
//     backgroundColor: "lightgreen"
//   }
// });
