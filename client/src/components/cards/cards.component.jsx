import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllDrivers } from "../../redux/actions";
import Card from "../card/card.component";
import Navbar from "../navbar/navbar.component";
import "./cards.styles.css";

function Cards() {
  const [drivers, setDrivers] = useState([]);
  const allDrivers = useSelector((state) => state.allDrivers);
  const dispatch = useDispatch();
  const itemsPerPage = 15;
  const list = allDrivers;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(list.length / itemsPerPage);

  const handlePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePagePrev = () => {
    if (currentPage > 1) {
      handlePage(currentPage - 1);
    }
  };

  const handlePageNext = () => {
    if (currentPage < totalPages) {
      handlePage(currentPage + 1);
    }
  };

  const paginatedList = list.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    dispatch(getAllDrivers());
  }, [dispatch]);

  const mostrarDrivers = () => {
    setDrivers(allDrivers);
  };

  return (
    <div className="conteiner">
      <Navbar />
      <div className="cards-container">
        {paginatedList.map((driver) => (
          <Card key={driver.id} driver={driver} />
        ))}
      </div>
      <div className="pagination">
        {currentPage > 1 && <button onClick={handlePagePrev}>&lArr;</button>}
        {[...Array(totalPages).keys()].map((i) => (
          <button onClick={() => handlePage(i + 1)} key={i}>
            {i + 1}
          </button>
        ))}
        {currentPage < totalPages && (
          <button onClick={handlePageNext}>&rArr;</button>
        )}
      </div>
    </div>
  );
}

export default Cards;
