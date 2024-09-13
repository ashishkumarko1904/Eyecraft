import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";
import "./DashBoard.css";
//outlet component render the child component on hitting a route (learn more from google.)
const DashBoard = () => {
  return (
    <div className="dashboard-container">
      <div className="left-navDashboard">
        <SideNav />
      </div>

      <div className="right-dashboard">
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;
