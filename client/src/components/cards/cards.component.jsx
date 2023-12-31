import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllDrivers, getTeams, getDriversByName } from "../../redux/actions";
import Card from "../card/card.component";
import Navbar from "../navbar/navbar.component";
import "./cards.styles.css";

function Cards() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const allDrivers = useSelector((state) => state.allDrivers);
  const allTeams = useSelector((state) => state.allTeams);
  const driversByName = useSelector((state) => state.driversByName);
  let totalPages = 0;
  let paginatedList;

  if (driversByName.length > 0) {
    totalPages = Math.ceil(driversByName.length / itemsPerPage);
  } else {
    totalPages = Math.ceil(allDrivers.length / itemsPerPage);
  }

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
  if (driversByName.length > 0) {
    paginatedList = driversByName.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  } else {
    paginatedList = allDrivers.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }

  return (
    <div>
      <Navbar />
      <div className="filterBar">
        <button>User's Drivers</button>
        <button>API Drivers</button>
        <button>All</button>
        <button>A-Z</button>
        <button>Z-A</button>
        <select>
          {allTeams.map((teams) => (
            <option value={teams.name} key={teams.id}>
              {teams.name}
            </option>
          ))}
        </select>
        <button>Year of birth(asc/des)</button>
      </div>
      <div className="bar-container">
        <div className="cards-container">
          {paginatedList.map((driver) => (
            <Card key={driver.id} driver={driver} />
          ))}
        </div>
        <div>
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
    </div>
  );
}

export default Cards;
