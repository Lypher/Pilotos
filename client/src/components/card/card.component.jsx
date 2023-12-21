import React from "react";
import { Link } from "react-router-dom";
import "./card.styles.css";

export default function Card(driver) {
  return (
    <Link to={`/detail/${driver.driver.id}`} className="card">
      <h2>Name: {driver.driver.name}</h2>
      <img src={driver.driver.image} alt="Small card with info of the driver" />
      <h2>Nationality: {driver.driver.nationality}</h2>
      {/* <button onClick={() => onclose(driver.driver.id)} >X</button> */}
    </Link>
  );
}
