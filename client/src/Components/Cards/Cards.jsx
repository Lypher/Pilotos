import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { getAllDrivers } from "../../redux/actions";
import "./Cards.css"; // Asegúrate de ajustar la ruta según sea necesario

function Cards() {
  const [drivers, setDrivers] = useState([]);
  const allDrivers = useSelector((state) => state.allDrivers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDrivers());
  }, [dispatch]);

  const first10Drivers = allDrivers.slice(0, 10);
  console.log(first10Drivers);

  return (
    <div>
      <h1>Cards:</h1>
      <div className="cards-container">
        {first10Drivers.map((driver) => (
          <Card key={driver.id} driver={driver} />
        ))}
      </div>
    </div>
  );
}

export default Cards;
