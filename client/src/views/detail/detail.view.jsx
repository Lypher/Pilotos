import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./detail.styles.css";
import Navbar from "../../components/navbar/navbar.component";

const Detail = () => {
  const { id } = useParams();
  const [driverDetail, setDriverDetail] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAxios = async () => {
      try {
        const response = await axios(`http://localhost:3001/drivers/${id}`);
        setDriverDetail(response.data);
        console.log(driverDetail);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      } finally {
        setLoading(false);
      }
    };

    getAxios();
  }, [id]);

  useEffect(() => {
    console.log("driverDetail:", driverDetail);
  }, [driverDetail]);
  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="content">
        <h1>{driverDetail.name}</h1>
        <img src={driverDetail.image} />
        <article>{driverDetail.description}</article>
        <h3>{driverDetail.dob}</h3>
        <h3>{driverDetail.teams}</h3>
        <h3>{driverDetail.nationality}</h3>
      </div>
    </div>
  );
};

export default Detail;
