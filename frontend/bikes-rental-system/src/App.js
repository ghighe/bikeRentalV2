/* eslint-disable no-unused-vars */
import "./App.css";
import "./components/Common/NavigationBar";
import "./index.css";
import SideNavigationBar from "./components/SideNavigationBar";
import { BrowserRouter as Router } from "react-router-dom";
import AdminRoutes from "./components/Admin/Routes/AdminRoutes";
import { Box } from "@mui/material";

function App() {
  const userType = "admin";

  return (
    <Box sx={{ display: "flex" }}>
      <Router>
        <SideNavigationBar />
        <AdminRoutes />
      </Router>
    </Box>
  );
}

export default App;
