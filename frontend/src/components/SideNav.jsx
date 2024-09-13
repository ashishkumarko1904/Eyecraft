import { Link } from "react-router-dom";
import "./SideNav.css";

const SideNav = () => {
  return (
    <div className="sidenav">
      <div className="sidenav-link">
        <Link className="box-link" to="/dashboard/create">
          CREATE PRODUCT
        </Link>
      </div>
      <div className="sidenav-link">
        <Link className="box-link" to="/dashboard/modify">
          UPDATE PRODUCT
        </Link>
      </div>
      <div className="sidenav-link">
        <Link className="box-link" to="/dashboard/remove">
          DELETE PRODUCT
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
