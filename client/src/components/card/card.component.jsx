import React from "react";
import { Link } from "react-router-dom";
import "./card.styles.css";

export default function Card(driver) {
  return (
    <Link to={`/detail/${driver.driver.id}`} className="card">
      <h2>{driver.driver.name}</h2>
      <div
        className="driver-image"
        style={{ backgroundImage: `url(${driver.driver.image})` }}
      ></div>
      <p>Teams: {driver.driver.teams}</p>
    </Link>
  );
}
