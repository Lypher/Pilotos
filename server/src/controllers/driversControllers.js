const { infoDrivers } = require("../functions/functions.index");
const { Driver, Team } = require("../db");
const { Op } = require("sequelize");
const axios = require("axios");

const createDriverDB = async (
  id,
  name,
  surname,
  description,
  image,
  nationality,
  dob,
  teams
) => {
  return await Driver.create({
    id,
    name,
    surname,
    description,
    image,
    nationality,
    dob,
    teams,
  });
};

const getAllDrivers = async () => {
  const driversDB = await Driver.findAll();
  const driversJson = await infoDrivers();

  return driversJson.concat(driversDB);
};

const getDetailDriver = async (id, source) => {
  const driver = source === "db" ? infoDrivers : await Driver.findByPk(id);

  return driver;
};

const getNameDriver = async (name) => {
  const driverFilterJson = await infoDrivers().then((driver) =>
    driver.filter((driver) =>
      driver.name.toLowerCase().includes(name.toLowerCase())
    )
  );
  const driverFilterDB = await Driver.findAll({
    where: { name: { [Op.iLike]: `%${name}%` } },
  });

  return [...driverFilterJson, ...driverFilterDB];
};

const postDriver = async (
  name,
  surname,
  description,
  image,
  nationality,
  dob,
  teams
) => {
  try {
    const newDriver = await Driver.create({
      name,
      surname,
      description,
      image,
      nationality,
      dob,
      teams,
    });
    return newDriver;
  } catch (error) {
    console.error("Error al crear un nuevo conductor:", error);
    throw error;
  }
};

module.exports = { getAllDrivers, getDetailDriver, getNameDriver, postDriver };
