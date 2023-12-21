import React from "react";
import { useNavigate } from "react-router";
function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="navbar">
        <div>
          <button onClick={() => navigate("/drivers")}>All drives</button>

          <button>Teams</button>
          <button>Form</button>
          <button>About</button>
          <input type="text" name="" id="" />
          <button>GO</button>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
