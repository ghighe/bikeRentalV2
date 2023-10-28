import "./App.css";
import "./components/Common/NavigationBar";
import "./index.css";
import NavigationBar from "./components/Common/NavigationBar";
import AdminRoutes from "./components/Admin/Routes/AdminRoutes";

function App() {
  const userType = "admin";

  return (
    <>
      <div>
        <NavigationBar userType={userType} />
      </div>
      <AdminRoutes />
    </>
  );
}

export default App;
