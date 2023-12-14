import { Routes, Route } from "react-router-dom";
import AdminDashboard from "../adminPages/AdminDashboard";
import AddBike from "../adminPages/AddBike";
import Database from "../adminPages/Database";
import Maps from "../adminPages/Maps";
import Notifications from "../adminPages/Notifications";
import NoPage from "../adminPages/NoPage";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/" index element={<AdminDashboard />} />
      <Route path="/admin/addBike" element={<AddBike />} />
      <Route path="/admin/database" element={<Database />} />
      <Route path="/admin/maps" element={<Maps />} />
      <Route path="/admin/notifications" element={<Notifications />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default AdminRoutes;
