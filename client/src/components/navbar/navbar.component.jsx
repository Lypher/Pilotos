import React, { useEffect } from "react";
import "./navbar.styles.css";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { getAllDrivers, getDriversByName, getTeams } from "../../redux/actions";
import SearchBar from "../searchbar/searchbar.component";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDrivers());
    dispatch(getTeams());
  }, [dispatch]);

  const onSearch = (name) => {
    dispatch(getDriversByName(name));
  };
  return (
    <div className="navbar">
      <div className="navigation">
        <button
          onClick={() => {
            onSearch("");
            navigate("/drivers");
          }}
        >
          All drivers
        </button>
        <button>Teams</button>
        <button onClick={() => navigate("/form")}>Form</button>
        <button onClick={() => navigate("/about")}>About</button>
      </div>
      <div className="searchbar">
        <SearchBar onSearch={onSearch} placeholder="Search..." />
      </div>
    </div>
  );
}
export default Navbar;
