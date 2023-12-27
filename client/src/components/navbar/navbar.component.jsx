import React from "react";
import "./navbar.styles.css";
import { useNavigate } from "react-router";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="navigation">
        <button onClick={() => navigate("/drivers")}>All drivers</button>
        <button>Teams</button>
        <button onClick={() => navigate("/form")}>Form</button>
        <button onClick={() => navigate("/about")}>About</button>
      </div>
      <div className="searchbar">
        <input type="text" name="" id="" placeholder=" Search a driver" />
        <button>GO</button>
      </div>
    </div>
  );
}
export default Navbar;
