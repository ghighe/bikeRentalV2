import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "../Pages/AdminDashboard";
import AddBike from "../Pages/AddBike";
import Database from "../Pages/Database";
import Maps from "../Pages/Maps";
import Notifications from "../Pages/Notifications";
import NoPage from "../Pages/NoPage";

const AdminRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/" index element={<AdminDashboard />} />
        <Route path="/admin/addBike" element={<AddBike />} />
        <Route path="/admin/database" element={<Database />} />
        <Route path="/admin/maps" element={<Maps />} />
        <Route path="/admin/notifications" element={<Notifications />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
};

export default AdminRoutes;
