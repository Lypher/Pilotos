import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { getAllDrivers } from "../../redux/actions";

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
      <h1>hola</h1>
      <div>
        {first10Drivers.map((driver) => (
          <Card key={driver.id} driver={driver} />
        ))}
      </div>
    </div>
  );
}

export default Cards;
