const {
  getAllDrivers,
  getDetailDriver,
  getNameDriver,
  postDriver,
} = require("../controllers/driversControllers");
const { Driver, Team } = require("./../db");

/* const getDriversHandler = async (req, res) => {
  try {
    const drivers = await getAllDrivers();
    return res.status(200).json(drivers);
  } catch (error) {
    return res.status(500).send(error);
  }
}; */

const getDetailHandler = async (req, res) => {
  const { id } = req.params;

  if (!isNaN(id)) {
    try {
      const allDrivers = await getAllDrivers();
      const driverFilterJson = allDrivers.filter((driver) => driver.id == id);
      return res.status(200).json(driverFilterJson);
    } catch (error) {
      return res.status(404).send(error);
    }
  } else {
    try {
      const driver = await Driver.findByPk(id, {
        include: [
          {
            model: Team,
            attributes: ["name"],
            through: {
              attributes: [],
            },
          },
        ],
      });
      res.status(200).json(driver);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
};

/* const getNameHandler = async (req, res) => {
  try {
    const { name } = req.query;

    if (!name) {
      return res
        .status(400)
        .json({ error: "Nombre no proporcionado en la consulta." });
    }

    const nameDriver = await getNameDriver(name);

    if (nameDriver.length === 0) {
      return res.status(400).json("no se encontraron resultados");
    }

    return res.status(200).json(nameDriver);
  } catch (error) {
    console.error("Error en getNameHandler:", error);
    return res.status(500).send("Error interno del servidor.");
  }
}; */

const postDriverHandler = async (req, res) => {
  const { name, surname, description, image, nationality, dob } = req.body;
  const createDriver = await postDriver(
    name,
    surname,
    description,
    image,
    nationality,
    dob
  );
  try {
    return res.status(200).json(createDriver);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const getHandler = async (req, res) => {
  const { name } = req.query;
  try {
    if (!name) {
      try {
        const allDrivers = await getAllDrivers();
        res.json(allDrivers);
      } catch (error) {
        res(400).send(error);
      }
    } else {
      try {
        const nameDriver = await getNameDriver(name);
        if (nameDriver.length === 0) {
          return res.status(400).json("no se encontraron resultados");
        }

        return res.status(200).json(nameDriver);
      } catch (error) {
        console.error("Error en getNameHandler:", error);
        return res.status(500).send("Error interno del servidor.");
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error en el servidor");
  }
};

module.exports = {
  getDetailHandler,
  postDriverHandler,
  getHandler,
};
