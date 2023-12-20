import React from "react";
import { Link } from "react-router-dom";
import "./Card.css"; // Asegúrate de ajustar la ruta según sea necesario

function Card(driver) {
  return (
    <Link to={`/detail/${driver.driver.id}`} className="card">
      <h2>Name: {driver.driver.name}</h2>
      <img src={driver.driver.image} alt="" />
      <h2>Nationality: {driver.driver.nationality}</h2>
    </Link>
  );
}
export default Card;
