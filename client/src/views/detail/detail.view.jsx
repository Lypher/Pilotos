import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./detail.styles.css";

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
    <div className="content">
      <h1>
        {driverDetail.name.forename} {driverDetail.name.surname}
      </h1>
      <img src={driverDetail.image} />

      <article>{driverDetail.description}</article>
    </div>
  );
};

export default Detail;
