import { Link } from "react-router-dom";
import { BsFillSunFill } from "react-icons/bs";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h3 style={{ color: "whitesmoke" }}>EYECRAFT...</h3>
      </div>
      <div className="nav-right">
        <div className="cp-link">
          <Link to="/dashboard">DashBoard</Link>
        </div>
        <button className="circle-btn">
          <BsFillSunFill color="orange" size={"27px"} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
