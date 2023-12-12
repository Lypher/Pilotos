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
  dob
) => {
  return await Driver.create({
    id,
    name,
    surname,
    description,
    image,
    nationality,
    dob,
  });
};

const getAllDrivers = async () => {
  const driversDB = await Driver.findAll();
  const driversJson = await infoDrivers();

  return driversJson.concat(driversDB);
};

const getDetailDriver = async (id, source) => {
  const driver = source === "json" ? infoDrivers : await Driver.findByPk(id);

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
  dob
) => {
  const newDriver = await Driver.create({
    name,
    surname,
    description,
    image,
    nationality,
    dob,
  });

  return newDriver;
};

module.exports = { getAllDrivers, getDetailDriver, getNameDriver, postDriver };
