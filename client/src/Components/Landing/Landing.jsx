import React from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="drivers-btn" onClick={() => navigate("/Home")}>
        Enter
      </h1>
    </div>
  );
}
export default Landing;
