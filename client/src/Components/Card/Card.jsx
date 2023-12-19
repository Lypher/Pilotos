import React from "react";
import { Link } from "react-router-dom";

function Card(driver) {
  console.log(driver);
  return (
    <Link to={`/detail/${driver.id}`}>
      <h2>Name: {driver.driver.name}</h2>
    </Link>
  );
}
export default Card;
